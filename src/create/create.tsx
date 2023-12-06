import { fundNode, getIrys } from "@/lib/irys";

import { useEffect, useState } from "react";

import { sha256 } from "crypto-hash";

import * as LitJsSdk from "@lit-protocol/lit-node-client";

import Papa from "papaparse";
import { myQuery } from "@/utils/queryInit";
import { useAccount } from "wagmi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const UploadPage = () => {
  const [collectionName, setCollectionName] = useState("");
  const [dataHash, setDataHash] = useState("");
  const [file, setFile] = useState<File>();
  const [isPublic, setIsPublic] = useState(false);
  const { address } = useAccount();
  const [tabs, setTabs] = useState(1);
  const [fundingLoader, setFundingLoader] = useState(false);
  let tags;
  const handleFileUpload = async (file: File) => {
    // const file = event.target.files[0];
    Papa.parse(file, {
      complete: async (results) => {
        console.log(results);
        const text = results.data.map((row) => row.join(" ")).join("\n");
        // console.log(text);
        sha256(text).then((hash) => {
          setDataHash(hash);
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  };

  const uploadFile = async (fileToUpload: File, collectionName: string) => {
    const webIrys = await getIrys();
    let zipBlob;

    if (!isPublic) {
      console.log("test");
      const authSig = await LitJsSdk.checkAndSignAuthMessage({
        chain: process.env.NEXT_PUBLIC_LIT_CHAIN || "mumbai",
      });
      const litNodeClient = new LitJsSdk.LitNodeClient({
        litNetwork: "cayenne",
      });
      await litNodeClient.connect();

      const accessControlConditions = [
        {
          contractAddress: "",
          standardContractType: "",
          chain: "mumbai",
          method: "",
          parameters: [":userAddress"],
          returnValueTest: {
            comparator: "=",
            value: address,
          },
        },
      ];

      zipBlob = await LitJsSdk.encryptFileAndZipWithMetadata({
        chain: process.env.NEXT_PUBLIC_LIT_CHAIN || "polygon",
        authSig,
        //@ts-expect-error checking
        accessControlConditions,
        file: fileToUpload,
        litNodeClient,
        readme:
          "This file was encrypted using LitProtocol and the Irys Provenance Toolkit.",
      });

      console.log(zipBlob);

      await litNodeClient.connect();
    }

    // Your file

    const results = await myQuery
      .search("irys:transactions")
      .tags([{ name: `Hash-${collectionName}`, values: [`${dataHash}`] }]);

    if (!isPublic) {
      tags = [
        { name: "DReq", value: collectionName },
        { name: "DReq", value: "private" },
        { name: "DReq", value: "all" },
        { name: "DReq", value: file?.name },
        { name: `Hash-${collectionName}`, value: dataHash },
        {
          name: "DReq-Encrypted",
          value: zipBlob!.type,
        },
        {
          name: "Irys-Encrypted",
          value: "true",
        },
      ];
    } else {
      tags = [
        { name: "DReq", value: collectionName },
        { name: "DReq", value: "all" },
        { name: "DReq", value: file?.name },
        { name: `Hash-${collectionName}`, value: dataHash },
      ];
    }

    if (results?.length > 0) {
      console.log(results);
      alert("File already exists");
    } else {
      try {
        const receipt = await webIrys.uploadFile(
          isPublic ? fileToUpload : zipBlob,
          { tags }
        );
        console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
      } catch (e) {
        console.log("Error uploading file ", e);
      }
    }
  };

  useEffect(() => {
    if (file && collectionName) {
      uploadFile(file, collectionName);
    }
  }, [dataHash]);

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full pb-40">
      <h1 className="text-3xl mx-auto font-semibold">Create Collection</h1>
      {/* Section 1 */}
      {tabs === 1 && (
        <div className="flex flex-col  justify-center gap-11 h-[40vh]">
          <label className="flex flex-col gap-6">
            <p>Name</p>
            <input
              placeholder="Enter your collection name"
              className="rounded-full border p-4 bg-transparent border-[#476FFF]"
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </label>
          <Select onValueChange={(e) => setIsPublic(e === "public")}>
            <SelectTrigger className="w-full bg-transparent text-white border-[#476FFF] p-4 rounded-full">
              <SelectValue placeholder="Visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      {tabs === 2 && (
        <div className="flex flex-col justify-center items-center gap-11 h-[40vh]">
          <button
            onClick={async () => {
              setFundingLoader(true);
              try {
                await fundNode();
              } catch (error) {
                console.error(error);
              } finally {
                setFundingLoader(false);
              }
            }}
            className="bg-[#476FFF] flex items-center gap-3 rounded-md p-3 text-lg"
          >
            Fund a node {fundingLoader && <Loader2 className="animate-spin" />}
          </button>
        </div>
      )}

      {/* <input
        placeholder="Enter your collection name"
        onChange={(e) => setCollectionName(e.target.value)}
      /> */}
      {/* Upload the dataset for the model*/}

      {tabs === 3 && (
        <div className="flex flex-col justify-center gap-6 items-center  h-[40vh]">
          <p className="text-xl">Upload your file</p>
          <input
            placeholder="Upload file"
            type="file"
            accept=".csv"
            alt="Data-set Upload"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
        </div>
      )}

      <div className="relative w-fit flex items-center gap-11 mx-auto">
        <div
          className="flex cursor-pointer flex-col gap-1 bg-black z-20 w-24 items-center"
          onClick={() => setTabs(1)}
        >
          <div className="w-8 h-8 flex items-center justify-center border rounded-full border-[#0162DD]">
            {String("1").padStart(2, "0")}
          </div>
          <p
            className={cn(
              " whitespace-nowrap",
              tabs === 1 ? "text-[#0162DD] font-semibold" : "text-gray-400"
            )}
          >
            Details
          </p>
        </div>

        <hr className="absolute border-[#0162DD] border w-full" />
        <div
          className="flex flex-col cursor-pointer gap-1 w-32 bg-black z-20  items-center"
          onClick={() => setTabs(2)}
        >
          <div className="w-8 h-8 flex items-center justify-center border rounded-full border-[#0162DD]">
            {String("2").padStart(2, "0")}
          </div>
          <p
            className={cn(
              " whitespace-nowrap",
              tabs === 2 ? "text-[#0162DD] font-semibold" : "text-gray-400"
            )}
          >
            Fund
          </p>
        </div>

        <div
          className="flex flex-col cursor-pointer gap-1 w-32 bg-black z-20 items-center"
          onClick={() => setTabs(3)}
        >
          <div
            className={cn(
              "w-8 h-8 flex items-center justify-center border rounded-full border-[#0162DD]"
            )}
          >
            {String("3").padStart(2, "0")}
          </div>
          <p
            className={cn(
              " whitespace-nowrap",
              tabs === 3 ? "text-[#0162DD] font-semibold" : "text-gray-400"
            )}
          >
            Upload
          </p>
        </div>
      </div>

      {/* <input type="date" /> */}
    </div>
  );
};

export default UploadPage;

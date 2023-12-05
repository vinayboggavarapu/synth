import { fundNode, getIrys } from "@/lib/irys";

import { useEffect, useState } from "react";

import { sha256 } from "crypto-hash";

import * as LitJsSdk from "@lit-protocol/lit-node-client";

//@ts-expect-error checking
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

const UploadPage = () => {
  const [collectionName, setCollectionName] = useState("");
  const [dataHash, setDataHash] = useState("");
  const [file, setFile] = useState<File>();
  const [isPublic, setIsPublic] = useState(false);
  const { address } = useAccount();
  let tags;
  const handleFileUpload = async (file: File) => {
    // const file = event.target.files[0];
    Papa.parse(file, {
      //@ts-expect-error checking
      complete: async (results) => {
        console.log(results);
        //@ts-expect-error checking
        const text = results.data.map((row) => row.join(" ")).join("\n");
        // console.log(text);
        sha256(text).then((hash) => {
          setDataHash(hash);
        });
      },
      //@ts-expect-error checking
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
    <div>
      <Select onValueChange={(e) => setIsPublic(e === "public")}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Visibility" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public">Public</SelectItem>
          <SelectItem value="private">Private</SelectItem>
        </SelectContent>
      </Select>
      <input
        placeholder="Enter your collection name"
        onChange={(e) => setCollectionName(e.target.value)}
      />
      {/* Upload the dataset for the model*/}
      <button onClick={fundNode}>Fund a node</button>
      <p>Upload your file</p>
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

      <input type="date" />
    </div>
  );
};

export default UploadPage;

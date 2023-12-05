import { decryptFile } from "@/utils/decrypt";
import { Download } from "lucide-react";

const handleDownloadPublicFile = async (id: string) => {
  const response = await fetch(`https://gateway.irys.xyz/${id}`);
  const text = await response.text();
  const blob = new Blob([text], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const refElement: HTMLAnchorElement = document.createElement("a");
  const rootElement = document.getElementById("root");
  rootElement?.appendChild(refElement);
  refElement.href = url;
  refElement.download = "decrypted_file.csv";
  refElement.click();
  rootElement?.removeChild(refElement);
};

//@ts-expect-error checking
const Downloader = ({ data }) => {
  console.log(data);
  return (
    <div
      key={data.id}
      onClick={(e) => {
        e.preventDefault();

        if (data?.tags?.length > 4) {
          decryptFile(data.id, "text/csv");
        } else {
          handleDownloadPublicFile(data.id);
        }
      }}
    >
      <Download className="hidden group-hover:flex" />
    </div>
  );
};

export default Downloader;

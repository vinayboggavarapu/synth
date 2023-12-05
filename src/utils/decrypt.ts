"use client";
import * as LitJsSdk from "@lit-protocol/lit-node-client";

export function arrayBufferToBlob(buffer: ArrayBuffer, type: string): Blob {
  return new Blob([buffer], { type: type });
}

export function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        resolve(event.target.result as string);
      } else {
        reject(new Error("Failed to read blob as Data URL"));
      }
    };
    reader.readAsDataURL(blob);
  });
}

export async function decryptFile(
  id: string,
  encryptedFileType: string
): Promise<string> {
  console.log("fetching");
  try {
    const response = await fetch(`https://gateway.irys.xyz/${id}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch encrypted file from gateway with ID: ${id}`
      );
    }

    // 2. Extract the zipBlob
    const zipBlob = await response.blob();

    //@ts-ignore
    const litNodeClient = new LitJsSdk.LitNodeClient({
      litNetwork: "cayenne",
    });
    await litNodeClient.connect();

    // 3.5 You might need to get authSig or sessionSigs here if required
    const authSig = await LitJsSdk.checkAndSignAuthMessage({
      chain: process.env.NEXT_PUBLIC_LIT_CHAIN || "polygon",
    });

    // 4. Decrypt the zipBlob
    const result = await LitJsSdk.decryptZipFileWithMetadata({
      file: zipBlob,
      litNodeClient: litNodeClient,
      authSig: authSig, // Include this only if necessary
    });
    // @ts-ignore
    const decryptedFile = result.decryptedFile;
    // 5. Convert to a blob
    const blob = arrayBufferToBlob(decryptedFile, encryptedFileType);
    // 6. Build a dynamic URL
    const dataUrl = await blobToDataURL(blob);

    const refElement: HTMLAnchorElement = document.createElement("a");
    const rootElement = document.getElementById("root");
    rootElement?.appendChild(refElement);
    refElement.href = dataUrl;
    refElement.download = "decrypted_file";
    refElement.click();
    rootElement?.removeChild(refElement);
    return dataUrl;
  } catch (e) {
    console.error("Error decrypting file:", e);
  }
  return "";
}

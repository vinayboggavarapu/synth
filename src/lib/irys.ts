import { WebIrys } from "@irys/sdk";
import { createWalletClient, custom, parseEther } from "viem";
import { polygonMumbai } from "viem/chains";

export const getIrys = async (): Promise<WebIrys> => {
  const url = "https://devnet.irys.xyz";
  const token = "matic";
  // const rpcURL = "https://rpc-mumbai.maticvigil.com"; // Optional parameter

  const client = createWalletClient({
    chain: polygonMumbai,
    //@ts-expect-error test
    transport: custom(window.ethereum),
  });

  console.log("client=", client);
  //@ts-expect-error injected
  client.getSigner = () => client;
  //@ts-expect-error injected
  client.getAddress = async () => client.getAddresses().then((a) => a[0]);

  const wallet = { name: "viem", provider: client };
  const webIrys = new WebIrys({ url, token, wallet });

  // @ts-expect-error injected
  webIrys.tokenConfig.getFee = async (_amount, _to): Promise<number> => {
    return 0;
  };

  webIrys.tokenConfig.sendTx = async (data): Promise<string> => {
    const hash = await client.sendTransaction({
      to: data.to,
      value: parseEther("0.01"),
      account: webIrys.address as `0x${string}`,
    });
    return hash;
  };

  webIrys.tokenConfig.createTx = async (
    amount,
    to,
    fee
  ): Promise<{ txId: string | undefined; tx: any }> => {
    // dummy value/method
    return { txId: undefined, tx: { amount, to, fee } };
  };
  await webIrys.ready();

  //@ts-expect-error injected
  client._signTypedData = async (domain, types, message) => {
    message["Transaction hash"] =
      "0x" + Buffer.from(message["Transaction hash"]).toString("hex");
    //@ts-ignore
    return await client.signTypedData({
      domain,
      message,
      types,
      //@ts-ignore
      account: webIrys.address!,
      primaryType: "Bundlr",
    });
  };

  console.log(`Conected to webIrys from ${webIrys.address}`);
  return webIrys;
};

export const fundNode = async () => {
  const webIrys = await getIrys();
  try {
    const fundTx = await webIrys.fund(webIrys.utils.toAtomic(0.005));
    console.log(
      `Successfully funded ${webIrys.utils.fromAtomic(fundTx.quantity)} ${
        webIrys.token
      }`
    );
  } catch (e) {
    console.log("Error uploading data ", e);
  }
};

import { getIrys } from "./irys";
import { myQuery } from "@/utils/queryInit";

// Initialize STAMPS JS, passing a Warp and Arweave instance

export const getStampedTxn = async (id: string, address: string) => {
  //   const arweave = Arweave.init({});

  let count: number;

  console.log("stamping id", id);
  // Or manually specify a host
  //   const arweave = Arweave.init({
  //     host: "arweave.net",
  //     port: 443,
  //     protocol: "https",
  //   });
  //   const warp = WarpFactory.forMainnet();

  //   const stamps = Stamps.init({ warp, arweave });

  //   const stamps = Stamps.init({
  //     warp,
  //     arweave,
  //     graphql: "https://devnet.irys.xyz/graphql",
  //   });

  const results = await myQuery.search("irys:transactions").tags([
    { name: "DReq-Stamp", values: [id] },
    { name: "Stamped By", values: [address] },
  ]);

  const prevCount = await myQuery
    .search("irys:transactions")
    .sort("DESC")
    .tags([{ name: "DReq-Stamp", values: [id] }])
    .first();

  console.log("prevCount", prevCount);

  if (prevCount && Number(prevCount.tags[3].value) > 0) {
    count = Number(prevCount.tags[3].value) + 1;
  } else {
    count = 1;
  }

  if (results.length > 0) {
    console.log("already stamped");
    return null;
  } else {
    const webIrys = await getIrys();
    const receipt = await webIrys.upload("STAMP", {
      tags: [
        { name: "DReq", value: "Stamp" },
        { name: "DReq-Stamp", value: id },
        { name: "Stamped By", value: address },
        { name: "Stamped Count", value: String(count) },
      ],
    });

    console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
  }

  //   const wallet = new ArweaveWebWallet({
  //     name: "STAMPS",
  //   });
  // Initialize STAMPS JS, passing a Warp and Arweave instance

  //   wallet.setUrl("arweave.app");
  //   await wallet.connect();

  // Stamp an asset
  //   await stamps.stamp(id);

  //   // Get stamp count for an asset
  //   const { total } = await stamps.count(id);

  //   console.log(total);

  //   // Get counts for multiple assets
  //   const counts = await stamps.counts(TXs);

  //   // Check if the user has already stamped the asset
  //   const stamped = await stamps.hasStamped(id);

  //   // Get user's token balance
  //   const balance = await stamps.balance();
};

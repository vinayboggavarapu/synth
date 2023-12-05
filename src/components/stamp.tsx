import { getStampedTxn } from "@/lib/stamp";
import { useAccount } from "wagmi";

const StampTxn = (id: string) => {
  console.log("stamping id", id);
  const { address } = useAccount();
  return (
    <button
      className="p-2 rounded-md bg-gray-200"
      onClick={async () => {
        //@ts-expect-error checking
        await getStampedTxn(id.id!, address!);
      }}
    >
      Stamp
    </button>
  );
};

export default StampTxn;

import { getStampedTxn } from "@/lib/stamp";
import { Triangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const StampTxn = ({ id, count }: { id: string; count: any }) => {
  console.log("stamping id", id);
  const [stamps, setStampCount] = useState(0);
  const { address } = useAccount();

  useEffect(() => {
    setStampCount(count[id]);
    console.log("count", count[id]);
  }, [id, count]);

  return (
    <button
      key={id}
      className="p-2 rounded-md border border-[#476FFF]"
      onClick={async () => {
        await getStampedTxn(id!, address!);
      }}
    >
      <Triangle className="" />
      {stamps}
    </button>
  );
};

export default StampTxn;

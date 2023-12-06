import { getStampedTxn } from "@/lib/stamp";
import { useStampLoader } from "@/store/use-stamp-loader";
import { Triangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const StampTxn = ({ id, count }: { id: string; count: [] }) => {
  console.log("stamping id", id);
  const [stamps, setStampCount] = useState(0);
  const { address } = useAccount();
  const { setIsLoading, setStopLoading } = useStampLoader();

  useEffect(() => {
    setStampCount(count[id]);
    console.log("count", count[id]);
  }, [id, count]);

  return (
    <button
      key={id}
      className="p-2 rounded-md border border-[#476FFF]"
      onClick={async () => {
        setIsLoading();
        try {
          await getStampedTxn(id!, address!);
        } catch (error) {
          console.log(error);
        } finally {
          setStopLoading();
        }
      }}
    >
      <Triangle className="" />
      {stamps}
    </button>
  );
};

export default StampTxn;

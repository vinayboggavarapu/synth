import Downloader from "@/components/downloader";
import StampTxn from "@/components/stamp";
import { useStampLoader } from "@/store/use-stamp-loader";
import { myQuery } from "@/utils/queryInit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const [data, setData] = useState([]);
  const [stampsData, setStampsData] = useState({});
  const params = useParams();
  const { isLoading } = useStampLoader();

  const fetchData = async () => {
    const results = await myQuery
      .search("irys:transactions")
      .tags([{ name: "DReq", values: [params.name as string] }]);
    //@ts-expect-error checking
    setData(results);
  };

  const fetchStamps = async (ids) => {
    const results = {};

    for (const id of ids) {
      const res = await myQuery
        .search("irys:transactions")
        .sort("DESC")
        .tags([{ name: "DReq-Stamp", values: [id] }])
        .first();

      results[id] = res ? res.tags[3]?.value : 0;
    }
    setStampsData(results);
  };

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  useEffect(() => {
    if (data.length > 0) {
      //@ts-expect-error checking
      const ids = data.map((item) => item.id);
      fetchStamps(ids);
    }
  }, [data, isLoading]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Collection Name</h1>
          <p className="text-2xl font-semibold text-indigo-200">
            {params.name}
          </p>
        </div>
        <p className="border p-1 rounded-md flex items-center h-fit">
          Items : {data.length}
        </p>
      </div>
      <img className="w-96 h-96 mx-auto" src="/collection-image.png" />
      {data.map((item) => (
        <div
          //@ts-expect-error checking
          key={item.id}
          className="border border-[#476FFF] rounded-lg group p-3 hover:cursor-pointer hover:shadow-lg flex flex-col gap-2"
        >
          <div className="w-fit ml-auto">
            {
              //@ts-expect-error checking
              item.tags.length > 4 ? <p>Private</p> : <p>Public</p>
            }
          </div>
          {
            //@ts-expect-error checking
            <p className="text-lg font-semibold">{item.tags[3]?.value}</p>
          }
          {/* {
            //@ts-expect-error checking
            <p>Votes - {stampsData[item.id] || "Loading..."}</p>
          } */}

          <div className="flex justify-between">
            {
              //@ts-expect-error checking
              <p className="text-sm text-gray-100">{item?.id}</p>
            }
            <div className="flex gap-10 items-center">
              <Downloader data={item} />

              {
                //@ts-expect-error checking
                item.tags.length < 4 && (
                  //@ts-expect-error checking
                  <StampTxn id={item.id} count={stampsData} />
                )
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;

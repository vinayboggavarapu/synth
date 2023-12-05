import Downloader from "@/components/downloader";
import StampTxn from "@/components/stamp";
import { myQuery } from "@/utils/queryInit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const [data, setData] = useState([]);
  const [stampsData, setStampsData] = useState({});
  const params = useParams();

  const fetchData = async () => {
    const results = await myQuery
      .search("irys:transactions")
      .tags([{ name: "DReq", values: [params.name as string] }]);
    //@ts-expect-error checking
    setData(results);
  };

  //@ts-expect-error checking
  const fetchStamps = async (ids) => {
    const results = {};

    for (const id of ids) {
      const res = await myQuery
        .search("irys:transactions")
        .sort("DESC")
        .tags([{ name: "DReq-Stamp", values: [id] }])
        .first();
      //@ts-expect-error checking
      results[id] = res ? res.tags[3]?.value : 0;
    }
    setStampsData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      //@ts-expect-error checking
      const ids = data.map((item) => item.id);
      fetchStamps(ids);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3 w-full">
      {data.map((item) => (
        <div
          //@ts-expect-error checking
          key={item.id}
          className="border group p-3 hover:cursor-pointer hover:shadow-lg flex flex-col gap-2"
        >
          <div className="w-fit ml-auto">
            {
              //@ts-expect-error checking
              item.tags.length > 4 ? <p>Private</p> : <p>Public</p>
            }
          </div>
          {
            //@ts-expect-error checking
            <p>{item.tags[3]?.value}</p>
          }
          {
            //@ts-expect-error checking
            <p>Votes - {stampsData[item.id] || "Loading..."}</p>
          }

          <div className="flex justify-between">
            {
              //@ts-expect-error checking
              item?.id
            }
            {
              //@ts-expect-error checking
              <StampTxn id={item.id as string} />
            }
            <Downloader data={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;

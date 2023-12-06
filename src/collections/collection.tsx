// import { decryptFile } from "@/utils/decrypt";

import { myQuery } from "@/utils/queryInit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  const [data, setData] = useState([]);
  let groupedTransactions = {};

  const fetchData = async () => {
    const results = await myQuery
      .search("irys:transactions")
      .tags([{ name: `DReq`, values: ["all"] }]);

    groupedTransactions = results.reduce((grouped, transaction) => {
      console.log(results);
      const key = transaction.tags[0].value;
      //@ts-expect-error checking
      if (!grouped[key]) {
        //@ts-expect-error checking
        grouped[key] = [];
      }
      //@ts-expect-error checking
      grouped[key].push(transaction.id);
      return grouped;
    }, {});

    //@ts-expect-error checking
    setData(groupedTransactions);
  };
  fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" p-3 overflow-y-auto grid grid-cols-4 gap-4">
      {data &&
        Object.keys(data).map((item) => (
          <Link
            to={`/collections/${item}`}
            // onClick={() => {
            //   decryptFile(item.id, "text/csv");
            // }}
            //@ts-expect-error checking
            key={item.id}
            className="flex flex-col gap-3 bg-[#3B3B3B] text-white rounded-3xl cursor-pointer h-96"
          >
            <img className="w-full h-64" src="/collection-image.png" />
            <div className="p-3 flex flex-col gap-3">
              <p>Collection Name</p>
              <p className="text-lg font-semibold">{item}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Collections;

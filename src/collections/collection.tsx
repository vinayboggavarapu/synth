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

      if (!grouped[key]) {
        grouped[key] = [];
      }
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


    <div className="flex flex-col pt-16 pb-40">
     <div className="flex flex-col">
       <div className="text-zinc-300 text-5xl font-bold pr-6">Dataset Collections</div>
     <div className="w-auto text-zinc-300 text-2xl font-normal font-['Space Grotesk'] pr-6 pt-4">Explore Collections curated to train your AI model</div>
     </div>
     <Link to="/create">

<div className="ml-6 mt-20 w-[200px] h-[60px] px-[50px]  bg-gradient-to-b from-fuchsia-500 to-fuchsia-700 rounded-[20px] justify-center items-center gap-3 inline-flex">
          <div className="w-5 h-5 relative" />
          <div className="w-auto h-auto relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14 16H16V14H18V12H16V10H14V12H12V14H14V16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H10L12 6H20C20.55 6 21.021 6.196 21.413 6.588C21.805 6.98 22.0007 7.45067 22 8V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4Z" fill="#D9D9D9"/>
</svg>
</div>
          <div className="text-white text-2xl font-semibold justify-center center ">Upload</div>
          
          
</div>
</Link>

    <div className=" p-3 overflow-y-auto grid grid-cols-4 gap-4 pt-20">
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

    <div className="flex flex-col items-center justify-center pt-24">

<div className="text-justify text-zinc-300 text-[32px] font-semibold">Didn’t Find What you were looking for ?</div>
<div className="w-[569px] text-center text-zinc-300 text-lg font-normal font-['Space Grotesk']">Missing  Something?  Create your own  AI model collection</div>
<div className="w-56 py-2.5 mt-10 bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-[20px] justify-center items-center inline-flex">
          <div className="pl-[0.50px] py-[0.50px] justify-end items-center flex">
            <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
              <div className="w-4 h-4 relative" />
              <div className="text-center text-zinc-300 text-base font-semibold ">
                Request a Collection
              </div>
            </div>
          </div>
          <div className="w-4 h-4 relative" />
        </div>
</div>


    </div>
  );
};

export default Collections;

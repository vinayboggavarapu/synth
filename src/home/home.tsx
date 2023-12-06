const Home = () => {
  // const getData = async () => {
  //   const results = await myQuery
  //     .search("irys:transactions")
  //     .tags([{ name: "DReq", values: ["Health", "test"] }]);
  //   console.log(results);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="flex flex-col pt-10">
      <div className="flex flex-row pt-20">
        <div className="flex-col">
          <div className="w-auto text-white text-5xl font-bold pl-6 pr-10">
            Synthesize your AI model with data on our platform
          </div>
          <div className="w-auto text-white text-2xl font-medium font-['Space Grotesk'] p-6">
            Unleash the power of collective datasets for AI training, secured
            permanently with Arweave, shaping the future of decentralized data
            collaboration
          </div>
          <div className="ml-6 mt-10 w-auto h-[60px] px-[50px]  bg-gradient-to-b from-fuchsia-500 to-fuchsia-700 rounded-[20px] justify-center items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative" />
            <div className="text-white text-1x font-semibold pl-22 leading-7">
              Explore Collections
            </div>
            <div className="w-auto h-auto relative">
              <img src="/expand.svg" width={24} height={24} alt="arrow-right" />
            </div>
          </div>
          {/* <div className="flex-row flex p-20">
            <div className="flex-col">
            <div className="w-[150px] text-fuchsia-500 text-2xl font-extrabold  capitalize leading-[39.20px]">25+ </div>
            <div className="w-[150px] text-white text-2xl font-normal font-['Space Grotesk'] capitalize leading-[38.38px]">Collections</div>
            </div>
            <div className="flex-col">
            <div className="w-[150px] text-fuchsia-500 text-2xl font-extrabold capitalize leading-[39.20px]">100+ </div>
            <div className="w-[150px] text-white text-2xl font-normal font-['Space Grotesk'] capitalize leading-[38.38px]">Contributors</div>
            </div>
            <div className="flex-col">
            <div className="w-[150px] text-fuchsia-500 text-2xl font-extrabold  capitalize leading-[39.20px]">15+ </div>
            <div className="w-[150px] text-white text-2xl font-normal font-['Space Grotesk'] capitalize leading-[38.38px]">Campaigns</div>
            </div>
          </div> */}
        </div>

        <div className="w-auto h-auto m-10">
          <img
            src="/Illustration.svg"
            alt="Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-15">
        <div className="w-[590.18px] h-[360px] p-[36.89px] bg-gradient-to-b from-accentblue to-accentpurple rounded-[18.44px] flex-col justify-start items-start gap-11 inline-flex">
          <div className="w-[73.77px] h-[73.77px] relative bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-2xl">
            <div className="w-[68px] h-[50.08px] left-[3.11px] top-[12.11px] absolute">
              <div className="w-[15.62px] h-[13.39px] left-[25.74px] top-[24.19px] absolute"></div>
            </div>
          </div>
          <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[30.74px] flex">
            <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[12.30px] flex">
              <div className="self-stretch text-3xl font-semibold leading-[46.11px]">
                Community Driven Datasets
              </div>
              <div className="self-stretch text-base font-normal  leading-[24.89px]">
                Dive into the power of trust with Synth's community-curated
                datasets, shaping a secure and collaborative foundation for
                decentralized data excellence.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[590.18px] h-[360px] p-[36.89px] bg-gradient-to-b from-accentblue to-accentpurple rounded-[18.44px] flex-col justify-start items-start gap-11 inline-flex">
          <div className="w-[73.77px] h-[73.77px] relative bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-2xl">
            <div className="w-[68px] h-[50.08px] left-[3.11px] top-[12.11px] absolute">
              <div className="w-[15.62px] h-[13.39px] left-[25.74px] top-[24.19px] absolute"></div>
            </div>
          </div>
          <div className="self-stretch h-[134.30px] flex-col  justify-start items-start gap-[30.74px] flex">
            <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[12.30px] flex">
              <div className="self-stretch text-3xl font-semibold leading-[46.11px]">
                Incentivized Collection{" "}
              </div>
              <div className="self-stretch  text-base font-normal  leading-[24.89px]">
                Earn rewards for contributing valuable datasets with Synth's
                Incentivized Collections—empowering collaborative data creation
                within our community.
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2">
          <div className="w-[590.18px] h-[360px] p-[36.89px] bg-gradient-to-b from-accentblue to-accentpurple rounded-[18.44px] flex-col justify-start items-start gap-11 inline-flex">
            <div className="w-[73.77px] h-[73.77px] relative bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-2xl">
              <div className="w-[68px] h-[50.08px] left-[3.11px] top-[12.11px] absolute">
                <div className="w-[15.62px] h-[13.39px] left-[25.74px] top-[24.19px] absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[30.74px] flex">
              <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[12.30px] flex">
                <div className="self-stretch  text-3xl font-semibold  leading-[46.11px]">
                  Exclusivity
                </div>
                <div className="self-stretch  text-base font-normal leading-[24.89px]">
                  Own your dataset with Synth, ensuring sole ownership in a
                  secure, decentralized environment powered by Arweave.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2">
          <div className="w-[590.18px] h-[360px] p-[36.89px] bg-gradient-to-b from-accentblue to-accentpurple rounded-[18.44px] flex-col justify-start items-start gap-11 inline-flex">
            <div className="w-[73.77px] h-[73.77px] relative bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-2xl">
              <div className="w-[68px] h-[50.08px] left-[3.11px] top-[12.11px] absolute">
                <div className="w-[15.62px] h-[13.39px] left-[25.74px] top-[24.19px] absolute"></div>
              </div>
            </div>
            <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[30.74px] flex">
              <div className="self-stretch h-[134.30px] flex-col justify-start items-start gap-[12.30px] flex">
                <div className="self-stretch  text-3xl font-semibold leading-[46.11px]">
                  Eternalize
                </div>
                <div className="self-stretch  text-base font-normal leading-[24.89px]">
                  Safeguard your data indefinitely with Synth, leveraging
                  Arweave's permanence for enduring and secure data storage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-10">
        <div className="w-auto h-auto p-7 justify-start items-start gap-[9px] inline-flex">
          <div className="w-auto h-auto relative">
            <img src="/notable.svg" width={30} height={30} alt="te" />
          </div>
          <div className="text-zinc-300 text-1xl font-bold ">
            Notable Collections
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-auto h-auto bg-neutral-700 rounded-[20px] flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-64 rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-start gap-2.5 flex">
            <img
              className="self-stretch h-64  rounded-tl-[20px] rounded-tr-[20px]"
              src="/collection-image.png"
            />
          </div>
          <div className="self-stretch h-40 px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-[5px] flex">
              <div className="self-stretch text-white text-[22px] font-semibold capitalize leading-[30.80px]">
                Collection Name
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <img
                      className="w-6 h-6 rounded-[120px]"
                      src="https://via.placeholder.com/24x24"
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 text-white text-base font-normal font-['Plus Jakarta Sans']">
                  MoonDancer
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start inline-flex">
              <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-300 text-xs font-bold font-['Space Mono'] leading-[13.20px]">
                  Price
                </div>
                <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">
                  120 AR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-50 py-10 flex-col justify-center items-center gap-[27px] inline-flex">
        <div className="flex-col justify-center items-center gap-[19px] flex">
          <div className="text-justify text-zinc-300 text-2xl font-normal ">
            Not sure about building a collection but still want one?
          </div>
          <div className="text-justify text-zinc-300 text-1xl font-normal ">
            Request curated Collections from creators by creating a campaign{" "}
          </div>
        </div>
        <div className="w-56 py-2.5 bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 rounded-[20px] justify-center items-center inline-flex">
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

    // <div className="flex">
    //   <div className="flex gap-4 w-full">
    //      <Link
    //       href="/upload"
    //       className="p-6 border w-full cursor-pointer hover:shadow-md rounded-md"
    //     >
    //       Upload to a collection
    //     </Link>
    //     <Link
    //       href="/collections"
    //       className="p-6 border w-full cursor-pointer hover:shadow-md rounded-md"
    //     >
    //       Explore collections
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Home;

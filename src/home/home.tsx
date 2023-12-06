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
              src="https://via.placeholder.com/330x295"
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

      <footer className=" text-center lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                Synth
              </h6>

              <p>
                Transforming data collaboration. Contribute, download, create
                datasets seamlessly.
              </p>
            </div>
            <div className="">
              <h6 className="text-indigo-500 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Pages
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">Home</a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Collection
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">Create</a>
              </p>
            </div>
            <div className="">
              <h6 className="text-indigo-500 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Services
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Create Collection
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Add to existing collection
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Request a collection
                </a>
              </p>
            </div>

            <div>
              <h6 className="text-indigo-500 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Connect
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                >
                  <path
                    d="M17.7682 1.32785C16.4382 0.707849 14.9982 0.257849 13.4982 -0.00215127C13.485 -0.00257187 13.4719 -0.000103788 13.4598 0.00507949C13.4477 0.0102628 13.4369 0.0180354 13.4282 0.0278489C13.2482 0.357849 13.0382 0.787849 12.8982 1.11785C11.3072 0.877849 9.68916 0.877849 8.09816 1.11785C7.95816 0.777849 7.74816 0.357849 7.55816 0.0278489C7.54816 0.00784894 7.51816 -0.00215127 7.48816 -0.00215127C5.98816 0.257849 4.55816 0.707849 3.21816 1.32785C3.20816 1.32785 3.19816 1.33785 3.18816 1.34785C0.468164 5.41785 -0.281836 9.37785 0.0881641 13.2978C0.0881641 13.3178 0.0981641 13.3378 0.118164 13.3478C1.91816 14.6678 3.64816 15.4678 5.35816 15.9978C5.38816 16.0078 5.41816 15.9978 5.42816 15.9778C5.82816 15.4278 6.18816 14.8478 6.49816 14.2378C6.51816 14.1978 6.49816 14.1578 6.45816 14.1478C5.88816 13.9278 5.34816 13.6678 4.81816 13.3678C4.77816 13.3478 4.77816 13.2878 4.80816 13.2578C4.91816 13.1778 5.02816 13.0878 5.13816 13.0078C5.15816 12.9878 5.18816 12.9878 5.20816 12.9978C8.64816 14.5678 12.3582 14.5678 15.7582 12.9978C15.7782 12.9878 15.8082 12.9878 15.8282 13.0078C15.9382 13.0978 16.0482 13.1778 16.1582 13.2678C16.1982 13.2978 16.1982 13.3578 16.1482 13.3778C15.6282 13.6878 15.0782 13.9378 14.5082 14.1578C14.4682 14.1678 14.4582 14.2178 14.4682 14.2478C14.7882 14.8578 15.1482 15.4378 15.5382 15.9878C15.5682 15.9978 15.5982 16.0078 15.6282 15.9978C17.3482 15.4678 19.0782 14.6678 20.8782 13.3478C20.8982 13.3378 20.9082 13.3178 20.9082 13.2978C21.3482 8.76785 20.1782 4.83785 17.8082 1.34785C17.7982 1.33785 17.7882 1.32785 17.7682 1.32785ZM7.01816 10.9078C5.98816 10.9078 5.12816 9.95785 5.12816 8.78785C5.12816 7.61785 5.96816 6.66785 7.01816 6.66785C8.07817 6.66785 8.91816 7.62785 8.90816 8.78785C8.90816 9.95785 8.06816 10.9078 7.01816 10.9078ZM13.9882 10.9078C12.9582 10.9078 12.0982 9.95785 12.0982 8.78785C12.0982 7.61785 12.9382 6.66785 13.9882 6.66785C15.0482 6.66785 15.8882 7.62785 15.8782 8.78785C15.8782 9.95785 15.0482 10.9078 13.9882 10.9078Z"
                    fill="#D9D9D9"
                  />
                </svg>
                Discord
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M19.5556 1.93666C18.8283 2.25566 18.0534 2.46711 17.2456 2.56978C18.0767 2.07355 18.711 1.29378 19.0092 0.353886C18.2343 0.815886 17.3788 1.14222 16.467 1.32433C15.7312 0.540886 14.6826 0.0556641 13.5386 0.0556641C11.319 0.0556641 9.53211 1.85722 9.53211 4.06578C9.53211 4.38355 9.559 4.68911 9.625 4.98C6.292 4.81744 3.34278 3.22 1.36156 0.786553C1.01567 1.38666 0.812778 2.07355 0.812778 2.813C0.812778 4.20144 1.52778 5.43222 2.59356 6.14478C1.94944 6.13255 1.31756 5.94555 0.782222 5.651C0.782222 5.66322 0.782222 5.67911 0.782222 5.695C0.782222 7.64322 2.17189 9.26144 3.99422 9.63422C3.66789 9.72344 3.31222 9.76622 2.94311 9.76622C2.68644 9.76622 2.42733 9.75155 2.18411 9.69777C2.70356 11.2854 4.17756 12.4527 5.93022 12.4906C4.56622 13.5576 2.83433 14.2004 0.959444 14.2004C0.630667 14.2004 0.315333 14.1858 0 14.1454C1.77589 15.2907 3.88056 15.9446 6.15022 15.9446C13.5276 15.9446 17.5609 9.83344 17.5609 4.53633C17.5609 4.35911 17.5548 4.188 17.5462 4.01811C18.3419 3.45344 19.0104 2.74822 19.5556 1.93666Z"
                    fill="#D9D9D9"
                  />
                </svg>
                Twitter
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z"
                    fill="#D9D9D9"
                  />
                  <circle cx="15.375" cy="4.62499" r="0.66625" fill="#D9D9D9" />
                </svg>
                Instagram
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 text-center">
          <span>© 2023 Copyright</span>
        </div>
      </footer>
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

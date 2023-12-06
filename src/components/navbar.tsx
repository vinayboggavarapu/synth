// import { Othent } from "othent";
// import Irys from "@irys/sdk";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
// import Query from "@irys/query";
import { Link, useLocation } from "react-router-dom";
import { WalletIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  // const [loggedIn, setLoggedIn] = React.useState(false);
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { pathname } = useLocation();

  // let othent: any;
  // const login = async () => {
  //   othent = await Othent({
  //     API_ID: process.env.OTHENT_APP_ID as string,
  //   });
  //   const userDetails = await othent.logIn({ testNet: true });
  //   setLoggedIn(true);

  //   console.log(userDetails);
  // };

  // const logout = async () => {
  //   const response = await othent.logOut();
  //   console.log(response);
  //   setLoggedIn(false);
  // };

  return (
    <div className="flex py-5 sticky z-[1000] top-0 bg-black text-lg justify-between items-center w-full">
      {/* Logo here */}
      <Link
        to="/"
        className={cn(
          "cursor-pointer",
          pathname === "/" ? "font-semibold" : "font-normal"
        )}
      >
        <img src="/synth.png" className="w-24 h-16" alt="logo" />
      </Link>
      {/* Ctas here */}
      <ul className="flex gap-8 items-center">
        <Link
          to="/"
          className={cn(
            "cursor-pointer text-gray-300",
            pathname === "/" ? "font-bold text-white" : "font-normal"
          )}
        >
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link
          to="/collections"
          className={cn(
            "cursor-pointer text-gray-300",
            pathname.includes("/collections")
              ? "font-bold text-white"
              : "font-normal"
          )}
        >
          Collections
        </Link>
        <Link
          to="/create"
          className={cn(
            "cursor-pointer text-gray-300",
            pathname === "/create" ? "font-bold text-white" : "font-normal"
          )}
        >
          <li className="cursor-pointer">Create</li>
        </Link>
      </ul>
      <div className="flex items-center gap-3 border rounded-lg border-[#476FFF] p-3">
        <WalletIcon />
        {address ? (
          <button
            onClick={() => {
              disconnect();
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              open();
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

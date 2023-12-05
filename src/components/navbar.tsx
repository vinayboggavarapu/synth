// import { Othent } from "othent";
// import Irys from "@irys/sdk";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
// import Query from "@irys/query";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [loggedIn, setLoggedIn] = React.useState(false);
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

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
    <div className="flex justify-between w-full">
      {/* Logo here */}
      <h1 className="text-3xl">Test.</h1>
      {/* Ctas here */}
      <ul className="flex gap-8 items-center">
        <Link to="/collections" className="cursor-pointer">
          Collections
        </Link>
        <li className="cursor-pointer">Create</li>
        <li className="cursor-pointer">Help</li>
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
      </ul>
    </div>
  );
};

export default Navbar;

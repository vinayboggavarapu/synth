import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col gap-4 px-12 pb-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

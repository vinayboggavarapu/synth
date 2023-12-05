import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 px-12 py-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

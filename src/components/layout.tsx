import Navbar from "./navbar";  
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen h-fit bg-black text-white flex flex-col gap-4 px-12 pb-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Layout from "./components/layout";
import Name from "./collections/name/name";
import Collections from "./collections/collection";
import UploadPage from "./create/create";
import Request from "./request/request";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:name" element={<Name />} />
        <Route path="/create" element={<UploadPage />} />
        <Route path="/request" element={<Request />} />
      </Route>
    </Routes>
  );
};

export default App;

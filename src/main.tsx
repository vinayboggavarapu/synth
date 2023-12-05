import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Web3Modal } from "./context/walletConfig.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Web3Modal>
      <App />
    </Web3Modal>
  </BrowserRouter>
);

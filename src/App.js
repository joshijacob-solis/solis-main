import "./App.css";
import { RouterConfig } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollOnUrlChange/scrollOnUrlChange";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;

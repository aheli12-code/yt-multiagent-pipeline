import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Analysis from "./pages/Analysis";
import Ideas from "./pages/Ideas";
import Script from "./pages/Script";
import Thumbnail from "./pages/Thumbnail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Analysis</Link> |{" "}
        <Link to="/ideas">Ideas</Link> |{" "}
        <Link to="/script">Script</Link> |{" "}
        <Link to="/thumbnail">Thumbnail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Analysis />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/script" element={<Script />} />
        <Route path="/thumbnail" element={<Thumbnail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
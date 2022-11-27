import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./layouts/NavBar";

import AboutUs from "./pages/AboutUs";
import Catalogue from "./pages/Catalogue";

const Index = () => {
  return <div className="font-ubuntu"></div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<AboutUs />} />
          <Route path={"/catalogo"} element={<Catalogue />} />
          <Route path={"/ubicaciones"} element={<Index />} />
          <Route path={"/contacto"} element={<Index />} />
          {/* <Route path={"/no"} element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

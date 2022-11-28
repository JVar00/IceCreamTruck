import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./layouts/NavBar";

import AboutUs from "./pages/AboutUs";
import Catalogue from "./pages/Catalogue";
import Locations from "./pages/Locations";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<AboutUs />} />
          <Route path={"/catalogo"} element={<Catalogue />} />
          <Route path={"/ubicaciones"} element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

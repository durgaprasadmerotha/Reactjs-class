import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Items from "./Items"
import ListItems from "./ListItems"

const Allroutes = () => {
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/items" element={<Items/>}></Route>
    <Route path="/items/:i" element={<ListItems/>}></Route>
  </Routes>;
};

export default Allroutes;

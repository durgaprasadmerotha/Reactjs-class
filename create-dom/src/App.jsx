import React from "react";
import Nav from "./components/Nav";
import Allroutes from "./components/Allroutes";

const App = () => {
  return (
    <>
      <div className="mx-20 mt-10 px-6 py-4 bg-emerald-400">
        <Nav />
      </div>
      <div className="mx-20 mt-4 px-6 py-4 bg-purple-400">
        <Allroutes />
      </div>
    </>
  );
};

export default App;

import React from "react";

const Cards = () => {
  const data = [
    { name: "mahiya vee", description: "the woed famoues song forever" },
    {
      name: "Dil k pass",
      description: "the woed famoues song gg45t4g forever",
    },
  ];

  const eventHandler = () => {
    alert("chal riyo");
  };
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center">
      {data.map((item, index) => (
        <div className="kuch w-90 px-3 py-2 bg-zinc-200 rounded">
          <h3 className="font-semibold text-xl ">{item.name}</h3>
          <p className="mt-2 text-xs">{item.description}</p>
          <button
            onClick={eventHandler}
            className="px-2 py-1 bg-blue-200 font-semibold text-zinc-400 rounded mt-3"
          >
            use me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;

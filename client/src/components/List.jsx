import React from "react";
import { DeleteIcon } from "lucide-react";
export default function List() {
  const listData = [
    {
      id: 1,
      type: "Savings",
      color: "bg-pink-500",
    },
    {
      id: 2,
      type: "Savings",
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "timer",
      color: "bg-indigo-500",
    },
  ];
  return (
    <div className="w-full max-w-sm mx-auto">
      <h4 className="text-slate-600 text-3xl font-bold tracking-wider my-5 text-center capitalize">
        History
      </h4>
      {listData.map((list, index) => (
        <ListTypes key={index} data={list} />
      ))}
      {/* <ListTypes /> */}
    </div>
  );
}

const ListTypes = ({ data }) => {
  return (
    <div className="flex px-3 pr-6 items-center justify-between gap-5 relative rounded-lg overflow-hidden mb-2 py-2 shadow bg-slate-100">
      <span
        className={`w-3 h-full ${data.color} rounded-full absolute rounded-lg right-0 top-0 bottom-0`}
      ></span>
      <span>
        <DeleteIcon className="w-4 h-4 fill-red-400 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" />
      </span>
      <span className="text-xl justify-center pr-12 font-bold text-slate-800 capitalize">
        {data.type}
      </span>
    </div>
  );
};

import React from "react";

export default function Label() {
  const dataObj = [
    {
      id: 1,
      type: "Savings",
      color: "bg-pink-500",
      percent: 45,
    },
    {
      id: 2,
      type: "Savings",
      color: "bg-purple-500",
      percent: 55,
    },
    {
      id: 3,
      type: "timer",
      color: "bg-indigo-500",
      percent: 45,
    },
  ];
  return (
    <>
      {dataObj.map((value, index) => (
        <LabelComponents key={index} data={value} />
      ))}
    </>
  );
}

const LabelComponents = ({ data }) => {
  if (!data)
    return (
      <h1 className="text-red-600 text-center m-auto">label data not found!</h1>
    );
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-6 ${data.color} rounded-full`}></span>
        <p className="text-xl font-bold capitalize text-slate-600 mb-0">
          {data.type}
        </p>
      </div>
      <span className="text-2xl font-bold text-slate-900">{data.percent}</span>
    </div>
  );
};

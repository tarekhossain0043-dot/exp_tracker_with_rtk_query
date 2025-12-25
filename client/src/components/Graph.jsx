import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import Label from "./Label";

ChartJs.register(ArcElement, Tooltip, Legend);

const config = {
  data: {
    datasets: [
      {
        // label: "Budget Allocation",
        data: [330, 240, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 10, // হোভার করলে স্লাইসটা একটু বড় হবে
        borderRadius: 15,
        spacing: 10,
        borderWidth: 2,

        cutout: "60%", // ডোনাটের মাঝখানের ফাঁকা অংশ বড় বা ছোট করার জন্য
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // লেজেন্ড নিচে দেখাবে
        labels: {
          color: "#333",
          font: { size: 14 },
        },
      },
    },
  },
};
export default function Graph() {
  return (
    <div className="flex flex-col gap-5 justify-between items-center max-w-sm mx-auto">
      <div className="item relative">
        <Doughnut {...config} />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center">
          <span className="text-xl font-bold mb-0">Total</span>
          <span className="text-emerald-500 text-2xl">${0}</span>
        </div>
      </div>
      {/* label  */}
      <Label />
    </div>
  );
}

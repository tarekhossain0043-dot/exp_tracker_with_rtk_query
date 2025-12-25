import React from "react";
import Graph from "./components/Graph";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container mx-auto max-w-6xl px-2 m-5">
      <h1 className="text-3xl font-semibold font-primary capitalize rounded-lg py-3 text-center bg-slate-800 text-white/80 mb-7">
        Expense tracker
      </h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* chart */}
        <div>
          <Graph />
        </div>
        {/* form */}
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;

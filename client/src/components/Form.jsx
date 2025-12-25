import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [formData, setFromData] = useState("");
  console.log(formData);
  const onSubmit = (data) => {
    setFromData(data);
  };
  return (
    <div className="max-w-md w-full mx-auto">
      <h4 className="text-3xl tracking-wider font-bold capitalize max-[425px]:my-7 my-7 text-slate-600 text-center">
        transitions
      </h4>
      <form
        action="#"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full grid gap-4"
      >
        <div className="input-group">
          <input
            type="number"
            name="salary"
            id="salary"
            {...register("salary")}
            placeholder="Salary,houseNo.."
            className="w-full py-1 px-3 focus:outline-none"
          />
        </div>
        <div className="input-group">
          <select
            name="type"
            {...register("type")}
            id="type"
            className="w-full focus:outline-none px-2"
          >
            <option value="investment" defaultValue="Investment">
              Savings
            </option>
            <option value="savings">Savings</option>
            <option value="expence">Expence</option>
          </select>
        </div>
        <div className="input-group">
          <input
            type="number"
            name="percent"
            {...register("percent")}
            id="percent"
            placeholder="Amout percent.."
            className="w-full py-1 focus:outline-none px-2"
          />
        </div>
        <div className="submit-btn input-group bg-indigo-400 w-full hover:bg-indigo-500">
          <button
            type="submit"
            className="focus:ring-1 px-5 w-full py-3 text-slate-900 text-center focus:ring-indigo-500 text-xl capitalize font-medium cursor-pointer transition-all duration-300 ease-in-out"
          >
            Transitions now
          </button>
        </div>
      </form>
    </div>
  );
}

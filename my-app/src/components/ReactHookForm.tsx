"use client";

import { log } from "console";
import { SubmitHandler, useForm } from "react-hook-form";

type InputData = {
  name: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: number;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputData>();

  const onSubmit: SubmitHandler<InputData> = (data) => console.log(data);

  // console.log("The watch name:", watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Username</p>
      <input
        className="border border-black"
        defaultValue=""
        {...register("name")}
      />
      <p>Password</p>
      <input
        className="border border-black"
        defaultValue=""
        {...register("password")}
      />
      <p>Confirm Password</p>
      <input
        className="border border-black"
        defaultValue=""
        {...register("confirmPassword")}
      />
      <p>Gender</p>
      <select className="border border-black" {...register("gender")}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <p>Age</p>
      {errors.age && (
        <p className="text-red-500">
          {errors.age?.type === "max"
            ? "Must be lower than 32"
            : "Must be higher than 10"}
        </p>
      )}
      <input
        type="number"
        {...register("age", {
          min: { value: 10, message: "Must be higher than 10" },
          max: { value: 32, message: "Must be lower than 32" },
        })}
        className="border border-black"
      />

      <div className="pt-3">
        <input className="border border-black" type="submit" value="Send" />
      </div>
    </form>
  );
}

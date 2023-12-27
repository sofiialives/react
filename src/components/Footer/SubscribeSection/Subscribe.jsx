import React from "react";
import { useForm } from "react-hook-form";

export function Subscribe() {
  const { register, handleSubmit, reset } = useForm();

  const sendEmail = async (data) => {
    try {
      console.log("The message was sent to:", data.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data, event) => {
    try {
      event.preventDefault();
      await sendEmail(data);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      <h2>Subscribe to our news letter to get latest updates and news</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Enter Your Email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

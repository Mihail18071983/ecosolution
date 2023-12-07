"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Input } from '@mui/material';
import { FormLabel } from '@mui/material';


type FormData = {
  fullname: string;
  email: string;
  phone: string;
  message?: string;
};

export default function Form() {
  const { handleSubmit, control, register, reset } = useForm({
      defaultValues: { fullname: "", email: "", phone: "", message: "" },
      mode:"onBlur",
  });
    
     const onSubmit: SubmitHandler<FormData> = (data) => {
   console.log("form data", data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>Form</form>
      <DevTool control={control} />
    </>
  );
}

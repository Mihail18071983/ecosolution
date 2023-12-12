"use client";

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Input, TextField, FormControl, FormLabel, Button } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import EastIcon from "@mui/icons-material/East";
import { ColorRing } from "react-loader-spinner";
import { toast } from "sonner";

type FormData = {
  fullname: string;
  email: string;
  phone: string;
  message?: string;
};

const showSuccessToast = () => {
  toast.success("Data successfully applied!");
};

const formData = [
  {
    id: 1,
    name: "Fullname",
    type: "text",
    title: "* Full name:",
    placeholder: "John Rosie",
  },
  {
    id: 2,
    name: "Email",
    type: "email",
    title: "* E-mail:",
    placeholder: "johnrosie@gmail.com",
  },
  {
    id: 3,
    name: "Phone",
    type: "tel",
    title: "* Phone:",
    placeholder: "380961234567",
  },
];

export default function Form() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { fullname: "", email: "", phone: "", message: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("form data", data);
    showSuccessToast();
    reset();
  };
  return (
    <>
      <form
        className=" bg-background-color flex flex-col pb-9 pl-3 pr-3 pt-9 md:flex-1 md:pl-6 md:pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" mb-8 flex flex-col gap-7">
          {formData.map((item) => {
            return (
              <FormControl
                className="relative"
                fullWidth
                key={item.id}
                variant="standard"
              >
                <FormLabel
                  className="mb-2 font-firaSans text-16px leading-none tracking-[-0.64px]"
                  htmlFor={item.name}
                >
                  {item.title}
                </FormLabel>
                <TextField
                  className="bg-transparent border-b-hover-text-color font-firaSans text-18px leading-none -tracking-normal "
                  placeholder={item.placeholder}
                  variant="standard"
                  required
                  type={item.type}
                  id={item.name}
                  {...register(item.name as keyof FormData, {
                    validate: (value) => {
                      if (value === "") {
                        setError(item.name as keyof FormData, {
                          message: `Wrong ${item.name}`,
                        });
                        return `Wrong ${item.name}`;
                      }
                    },
                  })}
                />
                {errors[item.name as keyof FormData] && (
                  <p className="absolute bottom-0 right-0 translate-y-5 text-12px text-error">
                    {errors[item.name as keyof FormData]?.message}
                  </p>
                )}
              </FormControl>
            );
          })}
        </div>

        <FormControl fullWidth variant="standard" className="mb-3">
          <FormLabel
            className="mb-2 font-firaSans text-16px leading-none tracking-[-0.64px]"
            htmlFor="message"
          >
            Message
          </FormLabel>
          <TextareaAutosize
            className=" border-0 border-b  border-b-hover-text-color font-firaSans text-18px leading-none tracking-[-0.72px]"
            minRows={8}
            placeholder="Your message"
            {...register("message")}
          />
        </FormControl>

        {isSubmitting ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <Button
            type="submit"
            className=" ml-auto mr-0  flex gap-3 rounded-3xl border-hover-text-color p-1  pl-[16px] text-center font-firaSans text-16px text-main-text-color"
            variant="outlined"
            endIcon={
              <EastIcon className="h-8 w-8 rounded-full bg-hover-text-color p-2 transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color " />
            }
          >
            Send
          </Button>
        )}
      </form>
      <DevTool control={control} />
    </>
  );
}

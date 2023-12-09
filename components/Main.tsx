"use client"

import React, { useRef} from "react";
import useSectionRef from "@/hooks/useSectionRef";
import { Button } from "@mui/material";
import imgInMain from "../assets/image/Img_mob.jpg"

import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function Main() {
  const mainRef = useRef(null);
  useSectionRef(mainRef);
  return (
    <section ref={mainRef} className="text-main-text-color">
      <div className="container">
        <h2 className="uppercase leading-none font-oswald tracking-[-0.4px] text-36px mb-6 pr-10">
          RENEWABLE ENERGY For any task
        </h2>
        <p className="font-firaSans text-16px leading-5 tracking-[-0.4px] text-justify mb-4">
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <Button
          className=" mx-auto mb-6 flex text-center pl-[16px] p-1 gap-3  font-firaSans text-16px rounded-3xl border-hover-text-color text-main-text-color"
          variant="outlined"
          endIcon={
            <EastIcon className="bg-hover-text-color p-2 rounded-full w-8 h-8 transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color " />
          }
        >
          Learn more
        </Button>
        <p className="text-firaSans leading-none tracking-[-0.72px] text-main-text-color text-16px pt-7 pb-9 pr-4 pl-4 border-t border-hover-text-color ">
          <span >79005, Ukraine, Lvivstreet.</span>
          <span >Shota Rustaveli, 7</span>
          <span className="block text-center mt-2" >office@ecosolution.com</span>
        </p>
        <Image src={imgInMain} alt="wind turbine"/>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import useSectionRef from "@/hooks/useSectionRef";
import { Button } from "@mui/material";
import imgMainMob from "../assets/image/Img_mob.jpg";
import imgMainTab from "../assets/image/Img_tabl.jpg";

import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

export default function Main() {
  const mainRef = useRef(null);
  useSectionRef(mainRef);
  const { scrollTo, menuItems, sectionRefs, height, matches } =
    useAppContextValue();
  const scrollToCases = () => {
    scrollTo(sectionRefs[menuItems.length - 2], height);
  };
  return (
    <section ref={mainRef} className="text-main-text-color">
      <div className="container">
        <div className="md:mb-6 md:flex md:justify-between md:gap-[65px]">
          <h2 className="pr-10 font-oswald text-36px uppercase leading-none tracking-[-0.4px] max-md:mb-6 md:min-w-[300px] md:text-48px">
            RENEWABLE ENERGY For any task
          </h2>
          <div>
            <p className="mb-4 text-justify font-firaSans text-16px leading-5 tracking-[-0.4px]">
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <Button
              onClick={scrollToCases}
              className="flex gap-3 rounded-3xl border-hover-text-color p-1 pl-[16px] text-center  font-firaSans text-16px text-main-text-color transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color max-md:mx-auto max-md:mb-6"
              variant="outlined"
              endIcon={
                <EastIcon className=" h-8 w-8 rounded-full bg-hover-text-color  p-2 text-main-text-color " />
              }
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="text-firaSans items-center justify-between border-t border-hover-text-color pb-9 pt-7 text-center text-16px leading-none tracking-[-0.72px] text-main-text-color max-md:pl-4 max-md:pr-4 md:flex md:pt-5 ">
          <p>
            <span>79005, Ukraine, Lvivstreet.</span>
            <span>Shota Rustaveli, 7</span>
          </p>
          <p>
            <span className="block text-center max-md:mt-2">
              office@ecosolution.com
            </span>
          </p>
          <p>{matches && <span>ecosolution © 2023</span>}</p>
        </div>
        <div className="mx-auto w-fit">
          {!matches ? (
            <Image  src={imgMainMob} alt="wind turbine" />
          ) : (
            <Image src={imgMainTab} alt="wind turbine" />
          )}
        </div>
      </div>
    </section>
  );
}

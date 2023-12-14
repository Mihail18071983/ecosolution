"use client";

import React from "react";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import NorthIcon from "@mui/icons-material/North";
import FacebookIcon from "../svg-components/FacebookIcon";
import InstagramIcon from "../svg-components/InstagramIcon";
import { useAppContextValue } from "@/hooks/useAppContextValue";

export default function Footer() {
  const { scrollTo, sectionRefs, height } = useAppContextValue();
  const scrollToTheMain = () => {
    scrollTo(sectionRefs[0], height);
  };
  return (
    <footer className="pb-6">
      <div className="container">
        <hr className="mb-5 md:mb-8 block h-[2px] bg-hover-text-color" />
        <div className="mb-5 md:mb-3 flex flex-wrap items-baseline justify-center gap-1 md:justify-between">
          <div className="flex items-center gap-1">
            <Image priority width={31} height={18} src={bgAsset} alt="logo" />
            <h1 className="text-33px  font-bold leading-normal tracking-[-1.1px] text-main-text-color">
              ecosolution
            </h1>
            <p className="flex-column  w-[60px] gap-0 font-ca-saygon-text text-10px leading-none tracking-[-0.4px] text-hover-text-color">
              <span className="m-0 p-0">
                <span className="text-main-text-color">GREEN</span>
                <span>ERGY</span>
              </span>
              <span> FOR LIFE</span>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTheMain}
            className=" rounded-full flex items-center justify-center  bg-hover-text-color p-2 text-main-text-color transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color min-[410px]:order-2"
          >
            <NorthIcon className="h-4 w-4" />
          </button>
          <div className=" flex self-center items-center justify-center gap-2 min-[410px]:order-1 md:ml-[-160px]">
            <FacebookIcon
              width={24}
              height={24}
              className="cursor-pointer stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
            />
            <InstagramIcon
              width={24}
              height={24}
              className="cursor-pointer stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
            />
          </div>
        </div>

        <div className="mx-auto items-center text-center font-firaSans tracking-[-0.64px] text-main-text-color md:flex md:justify-between">
          <address className="max:md-mb-4 text-16px not-italic  leading-none">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </address>
          <p className="max:md-mb-3">office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
}

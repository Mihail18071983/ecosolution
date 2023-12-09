"use client";
import React from "react";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import BurgerMenu from "../Burger.menu";

export default function Header() {
  return (
  
      <header className="pb-[140px] pt-[34px]">
        <div className="container flex items-center">
          <Image priority width={31} height={18} src={bgAsset} alt="logo" />
          <h1 className="text-33px  font-bold leading-normal tracking-[-1.1px] text-main-text-color">
            ecosolution
          </h1>
          <p className="flex-column w-[60px] gap-0 font-ca-saygon-text text-10px leading-none tracking-[-0.4px] text-hover-text-color">
            <span className="m-0 p-0">
              <span className="text-main-text-color">GREEN</span>
              <span>ERGY</span>
            </span>
            <span> FOR LIFE</span>
          </p>
          <BurgerMenu />
        </div>
      </header>
 
  );
}

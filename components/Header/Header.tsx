import React from "react";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import BurgerMenu from "../Burger.menu";

export default function Header() {
  return (
    <header className="pt-[34px] pb-[140px]">
      <div className="container flex items-center">
        <Image priority width={31} height={18} src={bgAsset} alt="logo" />
        <h1 className="text-main-text-color  text-33px font-bold leading-normal tracking-[-1.1px]">
          ecosolution
        </h1>
        <p className="text-hover-text-color text-10px font-ca-saygon-text flex-column gap-0 tracking-[-0.4px] leading-none w-[60px]">
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

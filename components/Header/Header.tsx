"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import BurgerMenu from "../Burger.menu";

export default function Header() {
  const { headerRef, height } = useAppContextValue();

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      window.scrollY > height
        ? (headerRef.current.style.color = "#97D28B")
        : (headerRef.current.style.color = "#173D33");
    }
  }, [headerRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, headerRef]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-10 bg-inherit pb-[136px] pt-[34px]"
    >
      <div className="container flex items-center">
        <Image priority width={31} height={18} src={bgAsset} alt="logo" />
        <h1 className="text-33px  font-bold leading-normal tracking-[-1.1px] text-inherit">
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

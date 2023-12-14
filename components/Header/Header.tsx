"use client";
import React, { useEffect, useCallback } from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import BurgerMenu from "../Burger.menu";
import { Button } from "@mui/material";

export default function Header() {
  const { headerRef, height, matches, scrollTo, sectionRefs, menuItems } = useAppContextValue();

  const scrollToContacts = () => {
    scrollTo(sectionRefs[menuItems.length-1], -height)
  }

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
      className="fixed left-0 right-0 top-0 z-10 bg-inherit pb-[136px] xl:pb-[200px] md:pb-[155px] pt-[34px] xl:pt-[20px]"
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Image priority width={31} height={18} src={bgAsset} alt="logo" />
          <h1 className="text-33px font-bold leading-normal tracking-[-1.1px] text-inherit">
            ecosolution
          </h1>
          <p className="flex-column w-[60px] gap-0 font-ca-saygon-text text-10px leading-none tracking-[-0.4px] text-hover-text-color">
            <span className="m-0 p-0">
              <span className="text-main-text-color">GREEN</span>
              <span>ERGY</span>
            </span>
            <span> FOR LIFE</span>
          </p>
        </div>

        <div className="gap-2 md:flex">
          <BurgerMenu />
          {matches && (
            <Button
              onClick={scrollToContacts}
              type="button"
              className="mx-auto flex items-center gap-3 rounded-full bg-hover-text-color pb-[10px] pl-4 pr-4 pt-[10px] font-firaSans text-16px leading-none tracking-[-0.64px] text-main-text-color   after:block after:h-[14px] after:w-[14px] after:rounded-full after:bg-main-text-color after:content-[''] hover:bg-main-text-color hover:text-hover-text-color hover:after:bg-svg-btn-icon"
            >
              Get in touch
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

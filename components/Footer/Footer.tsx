import React from "react";
import Image from "next/image";
import bgAsset from "../../assets/svg/bgAsset.svg";
import { Divider } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import { IconButton } from "@mui/material";
import FacebookIcon from "../svg-components/FacebookIcon";
import InstagramIcon from "../svg-components/InstagramIcon";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Divider className="mb-5 block h-[2px] bg-hover-text-color" />
        <div className="mb-5 flex items-center">
          <Image priority width={31} height={18} src={bgAsset} alt="logo" />
          <h1 className="text-33px  font-bold leading-normal tracking-[-1.1px] text-main-text-color">
            ecosolution
          </h1>
          <p className="flex-column mr-6 w-[60px] gap-0 font-ca-saygon-text text-10px leading-none tracking-[-0.4px] text-hover-text-color">
            <span className="m-0 p-0">
              <span className="text-main-text-color">GREEN</span>
              <span>ERGY</span>
            </span>
            <span> FOR LIFE</span>
          </p>
          <IconButton className=" bg-hover-text-color p-2 text-main-text-color transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color">
            <NorthIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="mb-6 flex items-center justify-center gap-2">
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

        <div className="mx-auto text-center font-firaSans tracking-[-0.64px] text-main-text-color">
          <address className=" mb-4 text-16px not-italic  leading-none">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </address>
          <p className="mb-3">office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
}

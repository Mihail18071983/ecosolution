"use client"

import React from 'react';
import {Swiper} from "swiper/types"
import { IconButton, ButtonGroup } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

type IProps = {
  swiper?:Swiper|null
}


export default function SlideButtons({swiper}:IProps) {
  return (
     <ButtonGroup
          sx={{ gap: "12px", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            sx={{ border: "1px solid #173D33" }}
            className="p-[15px] text-main-text-color"
            onClick={() => swiper?.slidePrev()}
          >
            <WestIcon className="w-[36px] h-[36px]" />
          </IconButton>
          <IconButton
            onClick={() => swiper?.slideNext()}
            sx={{ border: "1px solid #173D33" }}
            className="p-[15px] text-main-text-color"
          >
            <EastIcon className="w-[36px] h-[36px]" />
          </IconButton>
        </ButtonGroup>
  );
}

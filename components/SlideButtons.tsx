"use client";

import React from "react";
import  styled from "@emotion/styled";
import { Swiper } from "swiper/types";
import { IconButton, ButtonGroup } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

type IProps = {
  swiper?: Swiper | null;
};

const IconButtonStyled = styled(IconButton)`
  border: 1px solid #173d33;
  transition: all 0.5s ease-in-out;
  &:hover {
    border-color: #97d28b;
  }
`;

export default function SlideButtons({ swiper }: IProps) {
  return (
    <ButtonGroup
      sx={{ gap: "12px", display: "flex", justifyContent: "flex-end" }}
    >
      <IconButtonStyled
        className="border p-[15px] text-main-text-color hover:text-hover-text-color "
        onClick={() => swiper?.slidePrev()}
      >
        <WestIcon className="h-[36px] w-[36px]" />
      </IconButtonStyled>
      <IconButtonStyled
        onClick={() => swiper?.slideNext()}
        className="p-[15px] text-main-text-color  hover:text-hover-text-color"
      >
        <EastIcon className="h-[36px] w-[36px]" />
      </IconButtonStyled>
    </ButtonGroup>
  );
}

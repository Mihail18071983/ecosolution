"use client";

import * as React from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import { IconButton, Modal, Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import FacebookIcon from "./svg-components/FacebookIcon";
import InstagramIcon from "./svg-components/InstagramIcon";

export default function BurgerMenu() {
  const { menuItems, scrollTo, sectionRefs, height } = useAppContextValue();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = (
    item: { id: number; name: string },
    _height: number,
  ) => {
    scrollTo(sectionRefs[item.id - 1], _height);
  };

  return (
    <div className="ml-4">
      <IconButton
        className=" bg-hover-text-color p-4 text-main-text-color transition delay-500 ease-in-out hover:[#DCEFD8] hover:text-hover-text-color"
        sx={{ width: "40px", height: "40px", borderRadius: "50%" }}
        onClick={handleOpen}
        aria-label="burger"
      >
        <MenuIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            top: "36px",
            right: "20px",
            left: "20px",
            bottom: "20px",
            borderRadius: "25px",
            backgroundColor: "rgba(23, 61, 51, 0.75)",
            backdropFilter: "blur(12.5px)",
            padding: "24px",
          }}
        >
          <div>
            <div className="mb-8">
              <button
                type="button"
                onClick={handleClose}
                className="flex translate-x-[-4px] items-center  gap-1 font-firaSans text-20px tracking-[-0.8px] text-menu-text-color"
              >
                <CloseIcon className="h-5 w-5" />
                <span>close</span>
              </button>
              <Divider className=" bg-white" />
            </div>

            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li
                  className="flex cursor-pointer gap-2 font-firaSans text-24px leading-none tracking-[-0.96px] text-menu-text-color transition delay-500 ease-in-out hover:text-hover-text-color"
                  key={item.id}
                  onClick={() => {
                    handleClose();
                    handleScroll(item, height);
                  }}
                >
                  {item.name}
                  <ArrowOutwardIcon className="h-4 w-4" />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 ml-0 w-fit">
            <FacebookIcon
              width={24}
              height={24}
              className="cursor-pointer stroke-white transition delay-500 ease-in-out hover:stroke-hover-text-color"
            />
            <InstagramIcon
              width={24}
              height={24}
              className="cursor-pointer stroke-white transition delay-500 ease-in-out hover:stroke-hover-text-color"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

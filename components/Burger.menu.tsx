"use client";

import * as React from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import { IconButton, Modal, Box } from "@mui/material";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import menuIcon from "../assets/svg/menu.svg";



export default function BurgerMenu() {
  const { menuItems, scrollTo, sectionRefs } = useAppContextValue();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = (item: { id: number; name: string }) => {
    scrollTo(sectionRefs[item.id - 1]);
  };

  return (
    <div className="ml-4">
      <IconButton
        className="bg-hover-text-color"
        sx={{ width: "40px", height: "40px", borderRadius: "50%" }}
        onClick={handleOpen}
        aria-label="burger"
      >
        <Image priority={false} src={menuIcon} alt="burger-icon" />
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
            position: "absolute",
            top: "20px",
            right: "20px",
            left: "20px",
            bottom: "20px",
            borderRadius: "25px",
            backgroundColor: "rgba(23, 61, 51, 0.75)",
            backdropFilter: "blur(12.5px)",
            padding: "24px",
          }}
        >
          <p className="relative flex items-center gap-1 border-b border-solid font-firaSans text-20px  text-menu-text-color">
            <CloseIcon sx={{ width: "20px", height: "20px", padding: "3px" }} />
            <span>close</span>
          </p>
          {menuItems.map((item) => (
            <li
              className="flex gap-2 font-firaSans text-menu-text-color hover:text-hover-text-color"
              key={item.id}
              onClick={() => {
                handleClose();
                handleScroll(item);
              }}
            >
              {item.name}
              <ArrowOutwardIcon />
            </li>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

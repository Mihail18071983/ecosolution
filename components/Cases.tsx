"use client";

import React, { useState, useEffect, memo, useRef } from "react";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import useSectionRef from "@/hooks/useSectionRef";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types";
import { IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import {Divider} from "@mui/material";

import imageSlide1 from "../assets/image/beautiful-view-wind-turbines.jpg";
import imageSlide2 from "../assets/image/solar.jpg";
import imageSlide3 from "../assets/image/ktp.jpg";
import imageSlide4 from "../assets/image/windmills.jpg";
import imageSlide5 from "../assets/image/nuclear-power-plant.jpg";
import SlideButtons from "./SlideButtons";

const items = [
  {
    id: 1,
    path: imageSlide1,
    description: "Wind Power for auto field irrigation",
    name: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    date: "July 2023",
  },
  {
    id: 2,
    path: imageSlide2,
    description: "Solar Panels for industrial use",
    name: "Zhytomyr city Private Enterprise “Bosch”",
    date: "November 2023",
  },
  {
    id: 3,
    path: imageSlide3,
    description: "Thermal modules",
    name: "Rivne city Private Enterprise “Biotech”",
    date: "October 2023",
  },
  {
    id: 4,
    path: imageSlide4,
    description: "Wind power",
    name: "Kherson city Private Enterprise “HealthyFarm”",
    date: "September 2021",
  },
  {
    id: 5,
    path: imageSlide5,
    description: "Mini nuclear stations",
    name: "Zaporizhia city Private Enterprise “Biotech”",
    date: "May 2021",
  },
];

function Cases() {
  const { matches } = useAppContextValue();
  const casesRef = useRef(null);
  useSectionRef(casesRef);
  const [activeSlide, setActiveSlide] = useState(1);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveSlide(swiper.realIndex + 1);
      });
    }
  }, [swiper]);

  return (
    <section ref={casesRef}>
      <div className="container">
        <div className="md:flex md:mb-7">
          <h2 className="max-md:mb-4 pr-10 md:pr-[50px] text-start min-[480px]:text-center  font-oswald text-28px uppercase leading-none md:text-36px md:basis-1/2">
            Successful cases of our company
          </h2>
          {matches && <Divider className="bg-hover-text-color" orientation="vertical" flexItem />}
          <div className="flex flex-row-reverse items-baseline justify-between mb-3 md:justify-between md:flex-grow">
            <SlideButtons swiper={swiper ?? undefined} />
            <p className="self-end text-justify font-firaSans text-28px font-light leading-none tracking-[-1.12px] md:ml-3">
              <span>
                {" "}
                {activeSlide < 10 ? "0" + activeSlide : activeSlide}{" "}
              </span>
              <span className="text-slider">
                /{items.length < 10 ? "0" + items.length : items.length}
              </span>
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={matches ? 2 : 1}
          onSlideChange={() => {
            setActiveSlide(swiper?.realIndex! + 1);
          }}
          onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
          loop={true}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-background-color">
                <Image src={item.path} alt={item.description} />
                <div className="pb-3 pl-3 pr-3 pt-6">
                  <div className="mb-3 flex items-center justify-between gap-[61px] border-b border-b-hover-text-color pb-7 ">
                    <h4 className=" font-firaSans text-18px leading-none tracking-[-0.72px] text-main-text-color">
                      {item.name}
                    </h4>
                    <IconButton className=" bg-hover-text-color p-4 text-main-text-color transition delay-500 ease-in-out hover:bg-main-text-color hover:text-hover-text-color">
                      <CallMadeIcon className="h-7 w-7" />
                    </IconButton>
                  </div>
                  <div className="flex items-center justify-between font-firaSans text-12px leading-none tracking-[-0.72px] text-main-text-color">
                    <p>{item.description}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(Cases);

"use client";

import React, { useState, useEffect, memo, useRef } from "react";
import useSectionRef from "@/hooks/useSectionRef";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Swiper as SwiperInstance } from 'swiper/types';
import { IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";


import imageSlide1 from "../assets/image/image1_mob.jpg";
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
  const casesRef = useRef(null);
  useSectionRef(casesRef);
  const [activeSlide, setActiveSlide] = useState(1);
  const [swiper, setSwiper] = useState< SwiperInstance|null>(null);

   useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex + 1);
      });
    }
  }, [swiper]);

  return (
    <section ref={casesRef}>
      <div className="container">
        <h2 className="mb-4 pr-10 text-start font-oswald text-28px uppercase leading-none">
          Successful cases of our company
        </h2>
        <SlideButtons swiper={swiper ??undefined} />
        <p className="-translate-y-6 text-justify font-firaSans text-28px font-light leading-none tracking-[-1.12px]">
          <span> {activeSlide < 10 ? "0" + activeSlide : activeSlide} </span>
          <span className="text-slider">
            /{items.length < 10 ? "0" + items.length : items.length}
          </span>
        </p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
        
          onSlideChange={() => {
            setActiveSlide(swiper?.realIndex! + 1);
          }}
            onSwiper={(swiper:SwiperClass) => setSwiper(swiper)}
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

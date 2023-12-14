"use client";

import React, { useState, useEffect, memo, useRef } from "react";
import useSectionRef from "@/hooks/useSectionRef";
import { Divider } from "@mui/material";

function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function Electricity() {
  const [count, setCount] = useState(1134147814);
  const electricityRef = useRef(null);
  useSectionRef(electricityRef);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section ref={electricityRef} className=" pb-6 md:pb-[80px]">
      <div className="container">
        <h2 className="mb-6 text-center font-oswald text-28px uppercase leading-none  max-xl:pl-[150px] max-xl:pr-[150px] md:text-36px xl:text-48px xl:max-w-[491px] xl:text-center xl:mx-auto">
          Electricity we produced for all time
        </h2>
        <Divider component="div" textAlign="center" orientation="vertical" className="h-[48px] md:h-[87px] w-[1px] bg-hover-text-color mx-auto" />
        <p className="mx-auto flex w-fit items-center gap-2 text-center font-oswald md:gap-4">
          <span className="text-48px font-bold tracking-[0.9px] text-hover-text-color md:text-[100px] xl:text-164px">
            {formatNumber(count)}
          </span>
          <span className="text-24px text-main-text-color md:text-28px">
            kWh
          </span>
        </p>
      </div>
    </section>
  );
}

export default memo(Electricity);

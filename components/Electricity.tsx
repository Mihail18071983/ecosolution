"use client";

import React, { useState, useEffect, memo, useRef } from "react";
import useSectionRef from "@/hooks/useSectionRef";

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
    <section ref={electricityRef} className=" pb-6">
      <div className="container">
        <h2 className="mb-[88px] text-center font-oswald text-28px  uppercase leading-none">
          Electricity we produced for all time
        </h2>
        <p className="mx-auto flex w-fit items-center gap-2 text-center font-oswald">
          <span className="text-48px font-bold tracking-[0.9px] text-hover-text-color">
            {formatNumber(count)}
          </span>
          <span className="text-24px text-main-text-color">kWh</span>
        </p>
      </div>
    </section>
  );
}

export default memo(Electricity);

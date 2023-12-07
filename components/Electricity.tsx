"use client";

import React, { useState, useEffect, memo } from "react";

function formatNumber(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

 function Electricity() {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className=" pb-6">
      <div className="container">
        <h2 className="uppercase leading-none font-oswald text-center  text-28px mb-[88px]">
          Electricity we produced for all time
        </h2>
        <p className="font-oswald flex items-center gap-2 text-center mx-auto w-fit">
          <span className="text-48px font-bold text-hover-text-color tracking-[0.9px]">
         {formatNumber(count)}
          </span>
          <span className="text-24px text-main-text-color">kWh</span>
        </p>
      </div>
    </section>
  );
}

export default memo(Electricity);
"use client"

import React, { useRef } from "react";
import useSectionRef from "@/hooks/useSectionRef";

import Image from "next/image";

import ranking from "../assets/svg/ranking.svg";
import maximizeCircle from "../assets/svg/maximize-circle.svg";
import globalEdit from "../assets/svg/global-edit.svg";
import cpuCharge from "../assets/svg/cpu-charge.svg";

const items = [
  {
    id: 1,
    iconPath: maximizeCircle,
    title: "Openness",
    content: "to the world, people, new ideas and projects",
  },
  {
    id: 2,
    iconPath:globalEdit,
    title: "Responsibility",
    content: "we are aware that the results of our work have an impact on our lives and the lives of future generations",
  },
  {
    id: 3,
    iconPath: cpuCharge,
    title: "Innovation",
    content: "we use the latest technology to implement non-standard solutions",
  },
  {
    id: 4,
    iconPath: ranking,
    title: "Quality",
    content:
      "we do not strive to be the first among others, but we want to be the best in our business",
  },
];

export default function About() {
  const aboutRef = useRef(null);
  useSectionRef(aboutRef);
  return (
    <section ref={aboutRef} className="text-main-text-color pt-9 pb-9">
      <div className="container">
        <h2 className="uppercase leading-none font-oswald  text-28px mb-6 pr-10">
          Main values of our company
        </h2>
        <p className="font-firaSans text-16px leading-5 tracking-[-0.64px] text-justify mb-8">
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </p>
        <ul className="grid grid-rows-2 grid-cols-2 gap-6">
          {items.map((item) => (
            <li className="text-main-text-color bg-background-color flex flex-col pl-3 pr-3 pb-3 h-[197px] pt-[13px]" key={item.id}>
              <div className="flex gap-1 pb-8 mb-3 border-b border-hover-text-color" >
                <Image width={16} height={16} src={item.iconPath} alt="icon" />
                <h3 className="font-oswald text-16px leading-6 uppercase">{item.title}</h3>
              </div>
              <p className="font-firaSans text-justify text-14px tracking-[-0.56px] leading-tight">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

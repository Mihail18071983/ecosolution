"use client";

import React, { useRef } from "react";
import styled from "@emotion/styled";
import useSectionRef from "@/hooks/useSectionRef";
import { useAppContextValue } from "@/hooks/useAppContextValue";
import Image from "next/image";

import ranking from "../assets/svg/ranking.svg";
import maximizeCircle from "../assets/svg/maximize-circle.svg";
import globalEdit from "../assets/svg/global-edit.svg";
import cpuCharge from "../assets/svg/cpu-charge.svg";

import manWorkerPath from "../assets/image/man-worker-firld-by-solar-panels.jpg";
import manWorkerPathXL from "../assets/image/man-worker-firld-by-solar-panels-desk.jpg";
import windFarmFieldsPath from "../assets/image/wind-farms-fields.jpg";
import windFarmFieldsPathXL from "../assets/image/wind-farms-fields-desc.jpg";


const items = [
  {
    id: 1,
    iconPath: maximizeCircle,
    title: "Openness",
    content: "to the world, people, new ideas and projects",
  },
  {
    id: 2,
    iconPath: globalEdit,
    title: "Responsibility",
    content:
      "we are aware that the results of our work have an impact on our lives and the lives of future generations",
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
  const { matches, matchesXL } = useAppContextValue();
  const aboutRef = useRef(null);
  useSectionRef(aboutRef);
  return (
    <section
      ref={aboutRef}
      className="pb-9 pt-9 text-main-text-color  md:pt-[102px] md:pb-[102px] xl:pt-[110px] xl:pb-[120px]"
    >
      <div className="container">
        <div className="md:mb-[60px] xl:mb-[80px] md:flex md:gap-[94px] xl:justify-between">
          <h2 className="mb-6 font-oswald text-28px  uppercase leading-none max-md:pr-10 md:min-w-[272px] md:text-36px xl:text-48px xl:max-w-[365px]">
            Main values of our company
          </h2>
          <p className="mb-8 text-justify font-firaSans text-16px leading-5 tracking-[-0.64px] xl:max-w-[460px]">
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world`s energy needs.
          </p>
        </div>

        <ValuesList className=" grid gap-6 max-md:grid-cols-2 max-md:grid-rows-2 xl:gap-[44px]">
          {items.map((item) => (
            <Item
              className="flex max-md:h-[197px] flex-col bg-background-color pb-3 pl-3 pr-3 pt-[13px] text-main-text-color xl:p-6 xl:justify-around"
              key={item.id}
            >
              <div className="mb-3 flex items-baseline gap-1 border-b border-hover-text-color pb-8">
                <Image className="xl:w-6 h-6" width={16} height={16} src={item.iconPath} alt="icon" />
                <h3 className="font-oswald text-16px uppercase leading-6 md:text-18px xl:text-32px">
                  {item.title}
                </h3>
              </div>
              <p className="text-justify font-firaSans text-14px leading-tight tracking-[-0.56px]">
                {item.content}
              </p>
            </Item>
          ))}
        {matchesXL ? (
  <>
    <Item>
      <Image className="w-full"
        src={manWorkerPathXL}
        alt="man worker field by solar panel"
      />
    </Item>
    <Item>
      <Image className="w-full"
        src={windFarmFieldsPathXL}
        alt="man worker field by solar panel"
      />
    </Item>
  </>
) : matches ? (
  <>
    <Item>
      <Image
        src={manWorkerPath}
        alt="man worker field by solar panel"
      />
    </Item>
    <Item>
      <Image
        src={windFarmFieldsPath}
        alt="man worker field by solar panel"
      />
    </Item>
  </>
) : null}

        </ValuesList>
      </div>
    </section>
  );
}

const ValuesList = styled.ul`
  @media screen and (min-width: 768px) {  
    grid-template-areas:
      "a  b c d"
      "e f g h";
        grid-template-columns:
      repeat(4, 1fr)
  }

`;

const Item = styled.li`
  @media screen and (min-width: 768px) {
    &:nth-of-type(1) {
      grid-area: a;
    }

    &:nth-of-type(2) {
      grid-area: b;
    }

    &:nth-of-type(3) {
      grid-area: g;
    }

    &:nth-of-type(4) {
      grid-area: h;
    }

    &:nth-of-type(5) {
      grid-area: c;
      grid-column: span 2;
    }

    &:nth-of-type(6) {
      grid-area: e;
      grid-column: span 2;
    }
  }
`;

"use client";

import React from "react";
import Faq from "./Faq";

const data = [
  {
    id: 1,
    title:
      "How do wind turbines and solar panels work together in a renewable energy system?",
    content:
      "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    id: 2,
    title:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    content:
      "Qui culpa et ut ipsum consequat incididunt tempor fugiat. Exercitation ut non elit dolore elit fugiat. Sunt amet quis mollit minim officia aute sint. Excepteur esse minim mollit laborum. Tempor incididunt nulla aliqua anim irure nostrud sint.",
  },
  {
    id: 3,
    title:
      "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    content:
      "Duis ea reprehenderit proident veniam enim veniam nostrud pariatur elit eu reprehenderit veniam amet. Occaecat voluptate ex esse cillum do. Laborum nulla ut occaecat laborum laborum velit aliquip qui occaecat anim ad. Aliquip culpa ex commodo elit et minim. Minim ut labore enim dolore pariatur in irure exercitation Lorem do. Est ex esse fugiat fugiat sint exercitation reprehenderit dolore pariatur anim ex qui quis.",
  },
  {
    id: 4,
    title:
      "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    content:
      "Esse fugiat voluptate incididunt aute in cupidatat ullamco laboris sunt et minim pariatur do. Cupidatat duis aute aliquip aliquip cillum deserunt tempor eu ullamco magna id aliqua sit ut. Qui eiusmod nulla exercitation ea do reprehenderit enim reprehenderit. Quis minim tempor exercitation laborum ea cupidatat.",
  },
];

export default function FAQ() {
  return (
    <section className="pt-9 pb-9">
      <div className="container">
        <h2 className="mb-6 pr-10 text-start font-oswald text-28px uppercase leading-none">
          Frequently Asked Questions
        </h2>
        <Faq data={data} />
        <div className="mx-auto">
          <p className="mb-3 text-center font-firaSans text-18px tracking-[-0.72px]">
            Didn`t find the answer to your question?
          </p>
          <button
            type="button"
            className="mx-auto flex items-center gap-3 rounded-full bg-hover-text-color pb-[10px] pl-4 pr-4 pt-[10px] font-firaSans text-16px leading-none tracking-[-0.64px] text-main-text-color  after:block after:h-[14px] after:w-[14px] after:rounded-full after:bg-main-text-color after:content-[''] hover:bg-main-text-color hover:text-hover-text-color hover:after:bg-svg-btn-icon"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
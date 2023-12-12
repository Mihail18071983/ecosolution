import React, { useState, useEffect } from "react";

import Image from "next/image";

import collapseIcon from "../assets/svg/collapse.svg";
import addIcon from "../assets/svg/add.svg";

interface IProps {
  data: {
    id: number;
    title: string;
    content: string;
  }[];
}

const Faq = ({ data }: IProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (data.length > 0) {
      setSelected(data[0].id);
    }
  }, [data]);

  const toggle = (id: number) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <ul className="max-md:mb-10">
      {data.map((item) => (
        <li className="pt-5 pb-5 border-t border-t-hover-text-color" key={item.id}>
          <div onClick={() => toggle(item.id)} className="flex justify-between gap-2 mb-3">
            {selected === item.id ? (
              <Image
                className="self-center"
                width={16}
                height={16}
                src={collapseIcon}
                alt="collapse"
              />
            ) : (
              <Image
                className="self-center"
                width={16}
                height={16}
                src={addIcon}
                alt="add icon"
              />
            )}
            <h2 className="font-firaSans text-18px text-justify leading-tight tracking-[-0.72px]">
              {item.title}
            </h2>
          </div>

          
            {selected === item.id && (
              <p className="text-14px font-firaSans text-justify leading-tight tracking-[-0.56px] pl-6">
                {item.content}
              </p>
            )}
        
        </li>
      ))}
    </ul>
  );
};

export default Faq;

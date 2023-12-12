import React, { useRef } from "react";
import useSectionRef from "@/hooks/useSectionRef";
import Link from "next/link";

import MapIcon from "./svg-components/MapIcon";
import FacebookIcon from "./svg-components/FacebookIcon";
import InstagramIcon from "./svg-components/InstagramIcon";
import SmsIcon from "./svg-components/SmsIcon";
import CallIcon from "./svg-components/CallIcon";
import Form from "./Form";

const callItems = [
  { id: 1, content: "38 (098) 12 34 567" },
  {
    id: 2,
    content: "38 (093) 12 34 567",
  },
];

export default function ContactUs() {
  const contactUsRef = useRef(null);
  useSectionRef(contactUsRef);
  return (
    <section ref={contactUsRef} className="pb-[32px]">
      <div className="container">
        <h2 className="mb-6 md:mb-8 text-center font-oswald text-28px uppercase leading-none md:text-36px">
          Contact us
        </h2>
        <div className="md:flex md:justify-between md:gap-[120px]">
          <div>
            <div className="mb-5">
              <h3 className="mb-2 font-firaSans text-16px tracking-[-0.64px] text-main-text-color">
                Phone:
              </h3>
              <div>
                {callItems.map((item) => (
                  <Link
                    key={item.id}
                    className="flex items-center gap-2 font-firaSans text-20px leading-none tracking-[-0.8px] text-main-text-color first:mb-3 "
                    href={`tel:${item.content}`}
                  >
                    <CallIcon
                      width={24}
                      height={24}
                      className="stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
                    />
                    {item.content}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h3 className="mb-2 font-firaSans text-16px tracking-[-0.64px] text-main-text-color">
                E-mail:
              </h3>
              <Link
                className="flex items-center gap-2 font-firaSans text-20px leading-none tracking-[-0.8px] text-main-text-color "
                href="mail:office@ecosolution.com"
              >
                <SmsIcon
                  width={24}
                  height={24}
                  className=" stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
                />
                office@ecosolution.com
              </Link>
            </div>
            <div className="mb-9 max-w-[244px]">
              <h3 className="mb-2 font-firaSans text-16px tracking-[-0.64px] text-main-text-color">
                Address:
              </h3>
              <div className="mb-6 flex cursor-pointer items-center gap-2">
                <div>
                  <MapIcon
                    width={24}
                    height={24}
                    className="stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
                  />
                </div>
                <address className="font-firaSans text-20px not-italic leading-none tracking-[-0.8px] text-main-text-color">
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </address>
              </div>
              <div className=" max-w-[110px]">
                <h3 className="mb-5 font-firaSans text-16px tracking-[-0.64px] text-main-text-color">
                  Social Networks:
                </h3>
                <div className="flex items-center justify-around">
                  <FacebookIcon
                    width={24}
                    height={24}
                    className="cursor-pointer stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
                  />
                  <InstagramIcon
                    width={24}
                    height={24}
                    className="cursor-pointer stroke-main-text-color transition delay-500 ease-in-out hover:stroke-hover-text-color"
                  />
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

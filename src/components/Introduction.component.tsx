import React from "react";
import { Link } from "react-scroll";
import { ReactElement } from "react";
import { BiChevronRight } from "react-icons/bi";
import pic from "../assets/Internship.jpg";
import { HorizontalLine } from "./UI/horizontal-line.component";

export const Introduction = (): ReactElement => (
  <>
    <div className="bg-blue-900 absolute z-0 top-0 right-0 left-2/3 bottom-1/2 md:visible invisible" />
    <Link
      activeClass="active"
      to="About-Heise"
      spy={true}
      smooth={true}
      duration={400}
      className="flex md:flex-wrap items-center justify-center gap-24 md:gap-12 h-[100vh] p-16 font-roboto z-10 relative"
    >
      <div className="flex flex-col self-stretch">
        <div className="my-auto">
          <p className="font-bold text-blue-900 text-lg">Frontend Entwickler</p>
          <h1 className="text-4xl font-bold">
            Mein Praktikum Als Web Developer
          </h1>
          <HorizontalLine>
            <h3 className="text-xl ">Bei Heise Medien GmbH & Co. KG</h3>
          </HorizontalLine>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center">
              <BiChevronRight className="text-2xl"></BiChevronRight>
              <p>Agile Entwicklung</p>
            </div>
            <div className="flex items-center">
              <BiChevronRight className="text-2xl"></BiChevronRight>
              <p>Large Scale Software</p>
            </div>
            <div className="flex items-center">
              <BiChevronRight className="text-2xl"></BiChevronRight>
              <p>
                <span className="text-lg font-bold">Techstack: </span>
                React, Tailwind, NestJs, GraphQl, MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="rounded-full w-30 h-30"
        src={pic}
        alt=""
        width="400"
        height="400"
      />
    </Link>
  </>
);

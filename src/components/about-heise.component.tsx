import React from "react";
import { ReactElement } from "react";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import pic from "../assets/Heise.jpeg";
import { InfoBox } from "./UI/Infobox.component";
import { Link } from "react-scroll";
import { HorizontalLine } from "./UI/horizontal-line.component";

export const AboutHeise = (): ReactElement => {
  return (
    <div className="relative">
      <div className="bg-blue-900 absolute z-10 top-1/2 left-0 right-2/3 bottom-0 md:visible invisible" />
      <Link
        activeClass="active"
        to="Work"
        spy={true}
        smooth={true}
        duration={400}
        className="flex flex-col items-center justify-center h-[100vh] flex-wrap bg-slate-50 relative"
        id="About-Heise"
      >
        <div className="flex items-center justify-center pt-10 gap-24 font-roboto">
          <img
            className="rounded-3xl z-20"
            src={pic}
            alt=""
            width="550"
            height="700"
          />
          <div className="flex flex-col gap-8 flex-wrap">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold ">About Heise Medien</h2>
              <HorizontalLine className="mb-0">
                <h4 className="text-lg">Das Unternehmen für IT-Medien</h4>
              </HorizontalLine>
            </div>
            <div className="flex gap-3 flex-wrap">
              <InfoBox title="Gegründet" text="19 Juni 1949">
                <FaRegHandshake className="text-2xl" />
              </InfoBox>
              <InfoBox title="Mitarbeiter" text="1085">
                <GrUserWorker className="text-2xl" />
              </InfoBox>
              <InfoBox title="Umsatz" text="194 Millionen">
                <AiOutlineStock className="text-2xl"></AiOutlineStock>
              </InfoBox>
            </div>
            <div className="max-w-lg">
              <p className="text-gray-700">
                Die Heise Medien GmbH & Co. KG ist ein Medienunternehmen mit dem
                Hauptsitz in Hannover. Der Verlag wird derzeitig von Ansgar
                Heise geführt und verfügt über mehrere Standorte in Deutschland.
                Die Geschäftsfelder werden dabei in 3 unterschiedlichen
                Kategorien eingeteilte: Verzeichnismedien, Content-Medien und
                Shopping-Portale.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

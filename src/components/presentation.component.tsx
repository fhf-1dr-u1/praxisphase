import React from "react";
import { AboutHeise } from "./about-heise.component";
import { Introduction } from "./Introduction.component";
import { Work } from "./work.component";
import { Workflow } from "./Workflow.component";

export const Presentation = () => {
  return (
    <div className="scroll-smooth w-full">
      <Introduction />
      <AboutHeise />
      <Work />
      <Workflow />
    </div>
  );
};

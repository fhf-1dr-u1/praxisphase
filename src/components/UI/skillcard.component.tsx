import React from "react";
import { ReactElement } from "react";

export interface skillCardProps {
  text?: string;
}

export const SkillCard = ({ text }: skillCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-stone-900 px-2 bg-white rounded-md">
      <p>{text}</p>
    </div>
  );
};

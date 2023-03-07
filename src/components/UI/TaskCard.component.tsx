import React, { ReactNode } from "react";
import { ReactElement } from "react";
import { HorizontalLine } from "./horizontal-line.component";

export interface TaskCardProps {
  url?: string;
  title?: string;
  children?: ReactNode;
}

export const TaskCard = ({
  url,
  title,
  children,
}: TaskCardProps): ReactElement => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md border-stone-900 overflow-hidden border-2 w-[28%]">
      <img src={url} alt="Task" className="w-full h-36 md:h-56" />
      <div className="flex flex-col w-full p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <HorizontalLine className="mt-2" />
        {children}
      </div>
    </div>
  );
};

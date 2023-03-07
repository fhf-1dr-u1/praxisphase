import React, { ReactNode } from "react";
import { ReactElement } from "react";

export interface InfoBoxProps {
  title?: string;
  text?: string;
  children?: ReactNode;
}

export const InfoBox = ({
  title,
  text,
  children,
}: InfoBoxProps): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-3 bg-white rounded-md border-stone-900 border-2">
      {children}
      <h3 className="text-lg font-semibold my-2 text-center">{title}</h3>
      <p className="text-sm text-center">{text}</p>
    </div>
  );
};

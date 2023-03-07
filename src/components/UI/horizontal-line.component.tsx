import classNames from "classnames";
import React, { ReactNode } from "react";
import { ReactElement } from "react";

export interface HorizontalLineProps {
  className?: string;
  isPulledThrough?: boolean;
  children?: ReactNode;
}

export const HorizontalLine = ({
  className,
  isPulledThrough,
  children,
}: HorizontalLineProps): ReactElement => {
  return (
    <div className={classNames(className, "flex items-center gap-4 my-4")}>
      <hr className="w-24 h-[2px] border-0 bg-gray-300" />
      {children}
      {isPulledThrough && <hr className="w-24 h-[2px] border-0 bg-gray-300" />}
    </div>
  );
};

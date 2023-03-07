import React, { ReactNode } from "react";

export interface WorkflowItemProps {
  text?: string;
  title: string;
  duration?: string;
  children: ReactNode;
}

export const WorkflowItem = ({
  text,
  title,
  duration,
  children,
}: WorkflowItemProps) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 bg-white max-w-xl z-20">
      <li className="mb-7 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          {text && (
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              {text}
            </span>
          )}
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <div className="my-2 pr-5 text-base font-normal text-stone-500 dark:text-stone-400">
          {children}
        </div>
      </li>
    </ol>
  );
};

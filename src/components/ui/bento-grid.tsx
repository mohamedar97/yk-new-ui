"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 rounded-xl border border-[#e4e4e7] p-6 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none",
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          {header}
          <div className="flex flex-row justify-between">
            {icon && <div className="p-2">{icon}</div>}
            {title && <div className="text-xl font-semibold">{title}</div>}
          </div>
          {description && (
            <div className="text-muted-foreground mt-1 text-sm">
              {description}
            </div>
          )}
        </div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-4xl font-bold md:text-7xl">
          <span className="text-primary">Every Child</span> Deserves a Home
        </h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-xl">
          We connect orphaned children with loving families, providing them with
          the support, care, and future they deserve.
        </p>
      </div>
    </LampContainer>
  );
}

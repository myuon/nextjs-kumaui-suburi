"use client";

import { css } from "@kuma-ui/core";
import { useState } from "react";

export const Header = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div
      className={
        flag
          ? css`
              background-color: blue;
              color: white;
            `
          : css`
              background-color: red;
              color: white;
            `
      }
    >
      THIS IS HEADER,{" "}
      <button
        onClick={() => {
          setFlag((prev) => !prev);
        }}
      >
        {flag ? "yes" : "no"}
      </button>
    </div>
  );
};

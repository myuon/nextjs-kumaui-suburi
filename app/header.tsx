"use client";

import { css } from "@kuma-ui/core";
import { Button } from "@myuon/mu-ui";
import { useState } from "react";

export const Header = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div
      className={
        flag
          ? css`
              background-color: blue;
            `
          : css`
              background-color: red;
            `
      }
    >
      THIS IS HEADER,{" "}
      <Button
        color="primary"
        onClick={() => {
          setFlag((prev) => !prev);
        }}
      >
        {flag ? "yes" : "no"}
      </Button>
    </div>
  );
};

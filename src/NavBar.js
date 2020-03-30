import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors.js";

const spin = keyframes`
to {
  transform: rotate(360deg)
}
`;

const NavBar = () => {
  const [padding] = useState(15);
  return (
    <div>
      <header
        css={css`
          background-color: ${colors.primary};
          padding: ${padding}px;
        `}
      >
        <Link to="/">Adopt Me!</Link>
        <span
          css={css`
            display: inline-block;
            animation: 1s ${spin} linear infinite;
            font-size: 60px;
            &:hover {
              animation: 1s ${spin} linear infinite reverse;
              text-decoration: underline;
            }
          `}
          role="img"
          aria-label="logo"
        >
          💩
        </span>
      </header>
    </div>
  );
};

export default NavBar;

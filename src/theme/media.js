import { css } from "styled-components";

export const sizes = {
  desktop: 90,
  desktopSmall: 60,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}rem) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

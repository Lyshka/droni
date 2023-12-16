import { SVGProps } from "react";

export const Play = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="29"
      viewBox="0 0 23 29"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1_61)">
        <path
          d="M22.125 14.9543L1.375 26.4856C1.13542 26.621 0.929688 26.6366 0.757812 26.5325C0.585938 26.4283 0.5 26.2408 0.5 25.97V2.96997C0.5 2.69913 0.585938 2.51163 0.757812 2.40747C0.929688 2.3033 1.13542 2.31893 1.375 2.45434L22.125 13.9856C22.3646 14.121 22.4844 14.2825 22.4844 14.47C22.4844 14.6575 22.3646 14.8189 22.125 14.9543Z"
          fill="white"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_61">
          <rect
            width="22"
            height="28"
            fill="white"
            transform="matrix(1 0 0 -1 0.5 28.47)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

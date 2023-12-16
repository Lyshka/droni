import { SVGProps } from "react";

export const Loupe = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_1_423)">
        <path
          d="M13.3733 14.0466C10.6724 16.3012 6.64892 16.161 4.11376 13.6259C1.42967 10.9418 1.43029 6.58941 4.11514 3.90456C6.8 1.2197 11.1524 1.21908 13.8365 3.90317C16.3716 6.43833 16.5118 10.4618 14.2572 13.1628L18.3401 17.2457C17.852 17.7338 17.0606 17.7339 16.5726 17.2459L13.3733 14.0466ZM12.9636 12.753C15.1603 10.5563 15.1603 6.99472 12.9636 4.79802C10.7669 2.60132 7.2053 2.60132 5.0086 4.79802C2.8119 6.99472 2.8119 10.5563 5.0086 12.753C7.2053 14.9497 10.7669 14.9497 12.9636 12.753Z"
          fill="black"
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_423">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.22998)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

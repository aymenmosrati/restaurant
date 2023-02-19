import React from "react";
import "./_index.scss";

const HiddenEye = () => {
  return (
    <svg
      className="eyeGlobal"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0952 17.9601C11.3877 17.9859 11.6892 17.9994 12 17.9994C16.909 17.9994 21 11.9994 21 11.9994C21 11.9994 20.3303 11.0172 19.2077 9.84766L11.0952 17.9601Z"
        fill="#077777"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.505 6.49479C13.7075 6.18692 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75003 13.8334 5.52649 15.4733L9 11.9998C9.00013 10.3431 10.3431 9.00013 11.9998 9L14.505 6.49479Z"
        fill="#077777"
      />
      <rect
        opacity="0.3"
        x="5.1001"
        y="18.4355"
        width="19"
        height="2"
        transform="rotate(-45 5.1001 18.4355)"
        fill="#077777"
      />
    </svg>
  );
};

export default HiddenEye;

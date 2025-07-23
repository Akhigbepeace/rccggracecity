import React from "react";

const AbstractShape = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md"
    >
      <g transform="translate(300,300)">
        <path
          d="M137.2,-156.6C178.5,-120.3,208.3,-60.1,205.8,-4.8C203.2,50.5,168.4,101,127.1,143.3C85.7,185.7,37.8,219.8,-18.1,233.1C-74,246.3,-148.1,238.7,-189.7,195.1C-231.3,151.5,-240.4,72,-222.4,3.3C-204.4,-65.4,-159.3,-122.8,-107.9,-158.3C-56.6,-193.8,0.9,-207.4,58.5,-197.7C116.1,-188,174,-155,137.2,-156.6Z"
          fill="#DFF3F6"
        />
      </g>
    </svg>
  );
};

export default AbstractShape;

import React from "react";

import ArrowSvgInterface from "../../interfaces/ArrowSvgInterface";

function Arrow({ direction }: ArrowSvgInterface): JSX.Element {
  return direction === "left" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.965"
      height="10"
      viewBox="0 0 5.965 10"
    >
      <path
        id="np_arrow_1920781_000000"
        d="M.289,4.313,4.324.279a.972.972,0,0,1,1.363,0,.972.972,0,0,1,0,1.363L3.3,4.038c-.971.971-.783,1.145,0,1.928L5.687,8.348A.969.969,0,1,1,4.31,9.711L.289,5.69A.981.981,0,0,1,0,5a.925.925,0,0,1,.289-.688Z"
        fill="#c1c5c7"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.966"
      height="10"
      viewBox="0 0 5.966 10"
    >
      <path
        id="np_arrow_1920781_000000"
        d="M.289,5.687,4.324,9.721A.964.964,0,0,0,5.687,8.358L3.3,5.962c-.971-.971-.783-1.145,0-1.928L5.687,1.652A.969.969,0,1,0,4.31.289L.289,4.31A.981.981,0,0,0,0,5a.925.925,0,0,0,.289.688Z"
        transform="translate(5.966 10) rotate(180)"
        fill="#c1c5c7"
      />
    </svg>
  );
}

export default Arrow;

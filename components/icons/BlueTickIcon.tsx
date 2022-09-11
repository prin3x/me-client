import Image from "next/image";
import React from "react";
import bluetick from "./assets/blue-tick.svg";

type Props = {};

function BlueTickIcon({}: Props) {
  return (
    <div className="mx-auto w-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="18"
        height="17"
        viewBox="0 0 18 17"
      >
        <defs>
          <pattern
            id="a"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 19 18"
          >
            <image
              width="19"
              height="18"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAAEgAAAAAdD3kWAAADfUlEQVQ4EX1UXWhUVxCeOffcNNnsX5tooqhQVIptxSgq1YoaiJEG8rNrbWspWLEgqFgpoiJ9CFKoL1LR+pAaJWIqpGujbazNZg2hlLaCD8WHtg8tJUQR0g2RvUlMsrl7xu+siaQhZmD2zHzzc+fMzFmmGVRcn1qpHflAhKphqphh7hein1nkklfxW5IaG810u56uhGKpPUx0DIleAZ4DdwvJv8w8TkKl0N+A/W0iXkp/vNoNPQumYCz5uiJ1/GmyxkYVvrfhYyL5DLYAAppJUZPJur1DC0IZWngzV/brhqKxgC43bDazI/302p8+JYiisc5VhtQlxK5BHFEo3lXHQt9YGcDhjA5epsTGUavPRbYlSskVxKzC9a9xqLanlPVECkEVwnRkqL369FwJpmzhhs71xKoF+gpwwmj/gGKd3Q7FNjqlHW6mD3sKA/HOBdCfS+H47XVI1AqHFSTcJr67fzhRk1ZC3AAwKyJtjxLbMhFvYrcW9V00lorPli0YT24mMldhWw5uLXps9g51VA5YX4X7rsF9/9OOc9cCSF6EY50hcz6yo2utxaYo2pDaqoRb4bQMzW3RY/6BkUguYHse3HlrnoJjCROPjIuftkFFw+YCkjdhFOXGUHOkNvmyxSOx5LYcyxWIi5npYoE/emjwxxpP5dz3MLyvOafrbTIf9ahCMo4N6u/aPuKO+Ufx5Y78lDSfCcWSu0W4GfoiEjlX4LiHB76vH7L+TLIIRxD4izZZP5KFfHItmCf7Rcfhg7jO7wDqUHkTopYg9AvPDR1LJyqH845v3XoBC15mZUXci57xHXslbPqbeYfJHwyjj5TaB/W+hXCV015En5i+fxHtLEQhm2AegP1vhUZff+rM7+NZzLfyFHntVXexe7tQ4UeZqPsptVSOTdnsafTk0xLudl33Hy6rThaPBugGMVfhKl96pS99Ql+tnZgeNJscjHVtQY++hQ3TVzu861WdyjaclHMC4ENUcDCcHjxVXHc734fZklgsVJ+sVSQXIZagPWc9PWhfEGqZJOvAiq3DPPAv6OVlQ/xToXYepovJD2ayYYwbj5p2wvYufMJ2hezk7cBsmmfJrGK32xE+CactULEy9ADVDsBrHHIUXA4uAWcQ+HmBds8/myzA/yWDTtGGnqhRfg2JeQfvbjU8goAn95H7sE8/GMe0Da+889fMP8cnkQpCzAi1A1oAAAAASUVORK5CYII="
            />
          </pattern>
        </defs>
        <rect width="18" height="17" fill="url(#a)" />
      </svg>
    </div>
  );
}

export default BlueTickIcon;

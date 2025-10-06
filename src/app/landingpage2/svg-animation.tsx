"use client";
import React from "react";
import { motion } from "motion/react";
export const SVGComponent = () => {
  return (
    <>
      <motion.div
        whileHover="animate"
        className="flex h-20 w-20 items-center justify-center rounded-md bg-white shadow-sm"
      >
        <SVG1 />
      </motion.div>

      {/* circle animation */}
      <SVG2 />

      {/* Linear animation of line */}
      <SVGLines />
    </>
  );
};

//^ bell icon svg
// svg icon every part define in path where M is for Move , and L is for Draw
export const SVG1 = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-neutral-500"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      {/* Animated Path 1 */}
      <motion.path
        variants={{
          animate: {
            x: [0, -5, 5, 0],
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
      />
      {/* Animated Path 2*/}
      <motion.path
        variants={{
          animate: {
            rotate: [0, 10, -10, 0],
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
      />
    </motion.svg>
  );
};

//^ circle svg
export const SVG2 = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      direction="ltr"
      width="222.40008544921875"
      height="210.39999389648438"
      viewBox="509.5999755859375 659.8489694930487 222.40008544921875 210.39999389648438"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-color-mode="light"
      //   style={{
      //     strokeDasharray: "20", // 20 dash create
      //     strokeDashoffset: "500", // position of dash
      //   }}

      fill="currentColor"
      stroke="currentColor" // here color define for every stroke // if we use tailwind then here define currentColor
      className={"fill-transparent stroke-green-500"}
    >
      <defs />
      <g transform="matrix(1, 0, 0, 1, 541.6, 691.849)" opacity="0.75">
        {/* path length basis animation , path length is combination of strokeDashArray + strokeDashoffset */}
        <motion.path
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          strokeWidth="2"
          d="M -0.5849 73.1142 C 0.6073 32.1365 36.0664 -0.6362 79.8073 -0.6362 C 122.411 0.2912 157.8701 33.0639 157.8701 73.4912 C 157.8081 113.3599 122.3491 146.1326 78.6081 146.1326 C 34.8741 146.3142 -0.5849 113.5415 -0.5849 73.1142 M -0.3312 72.988 C 0.5338 32.2765 35.9929 -0.4963 79.7339 -0.4963 C 123.4343 -0.1911 158.8933 32.5817 158.8933 73.0089 C 158.8057 114.1035 123.3466 146.8763 79.6056 146.8763 C 35.1278 146.188 -0.3312 113.4152 -0.3312 72.988"
          //fill="currentColor" // fill that color like bg
          // stroke="currentColor" // here color define for individual // if we use tailwind then here define currentColor
          // className={"fill-amber-100 stroke-green-500"}
        />
      </g>
    </motion.svg>
  );
};

//^ Linear animation of line
// svg line component
export const SVGLines = () => {
  return (
    <motion.div
      whileHover="animate"
      className="flex w-full max-w-md items-center justify-between rounded-md"
    >
      <div className="flex flex-col justify-between gap-8">
        <div className="relative text-sm">
          Meeting Summ.
          <TopSVG className="absolute top-2 left-32" />
        </div>
        <div className="relative text-sm">
          Div Centered
          <MiddleSVG className="absolute top-2 left-32" />
        </div>
        <div className="relative text-sm">
          Junior Intern
          <BottomSVG className="absolute -top-6 left-32" />
        </div>
      </div>
      <div className="relative z-20 size-10 translate-x-6 overflow-hidden rounded-sm bg-neutral-100 p-px">
        <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[3px] bg-white">
          <SVG1 />
        </div>
        <div className="absolute inset-0 h-full w-full scale-[1.4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:4s]"></div>
        <div className="absolute inset-0 h-full w-full scale-[1.4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] [animation-delay:2s] [animation-duration:4s]"></div>
      </div>
    </motion.div>
  );
};

const TopSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="326"
      height="32"
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="325"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="325.5"
        y1="1"
        x2="325.5"
        y2="32"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />

      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse" //^ this line must be use line animation gradient
          id="line-one-gradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="#F17463" />
          <stop offset="0.66" stopColor="#F17463" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const MiddleSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="323"
      height="2"
      viewBox="0 0 323 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="url(#line-two-gradient)"
        strokeLinecap="round"
      />
      <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-two-gradient"
        initial={{
          x1: "0%",
          x2: "10%",
        }}
        animate={{
          x1: "90%",
          x2: "100%",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <stop stopColor="var(--color-line)" />
        <stop offset="0.33" stopColor="var(--color-blue-500)" />
        <stop offset="0.66" stopColor="var(--color-blue-500)" />
        <stop offset="1" stopColor="var(--color-line)" />
      </motion.linearGradient>
    </svg>
  );
};

export const BottomSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="326"
      height="32"
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="31" x2="325" y2="31" stroke="var(--color-line)" />

      <line
        x1="325.5"
        y1="31"
        x2="325.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line y1="31" x2="325" y2="31" stroke="url(#line-three-gradient)" />

      <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-three-gradient"
        initial={{
          x1: "0%",
          x2: "10%",
        }}
        animate={{
          x1: "90%",
          x2: "100%",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <stop stopColor="var(--color-line)" />
        <stop offset="0.33" stopColor="var(--color-yellow-500)" />
        <stop offset="0.66" stopColor="var(--color-yellow-500)" />
        <stop offset="1" stopColor="var(--color-line)" />
      </motion.linearGradient>
    </svg>
  );
};

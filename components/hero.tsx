"use client";

import { useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";

export default function Hero() {
  const ref = useRef(null);

  const inView = useInView(ref, {});

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <div className="bg-page-gradient pb-[16.4rem] px-[16px] sm:px-[32px] pt-[48px] md:pb-[25.6rem]">
      <div className="mx-auto max-w-[120rem] px-[2.4rem] pt-[64px] text-center">
        <div className="flex items-center justify-center">
          <button className="backdrop:filter-[12px] flex items-center  h-[28px] rounded-full text-[13px] border border-transparent-white bg-white bg-opacity-10 px-[12px] text-off-white transition-colors ease-in hover:bg-opacity-20">
            Linear Mobile v0.1
            <svg
              className=" ml-[4px] mr-[-6px] "
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </button>
        </div>

        <h1 className="text-gradient my-[24px] font-medium tracking-[-0.02em] text-6xl leading-[1.1] md:text-[80px]">
          Linear is a better way <br className="hidden md:block" />
          to build products
        </h1>

        <p className="mb-12 text-lg md:text-[22px] text-[rgb(180,188,208)] leading-[1.3] font-normal mt-[48px] ">
          Meet the new standard for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </p>

        <div className="flex items-center justify-center">
          <button className="hover:text-shadow flex items-center rounded-full bg-primary-gradient px-[16px] hover:brightness-115 text-[16px] h-[48px] transition-all hover:shadow-primary">
            Get started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="ml-2"
              fill="currentColor"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- image --> */}

      <div ref={ref} className="mt-[12.8rem] [perspective:2000px] ">
        <div
          className={classNames(
            "relative   mx-auto  max-w-[1024px] rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full  before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
            inView && "before:animate-image-glow",
            inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          )}
        >
          <svg
            className={classNames(
              "absolute left-0 top-0 h-full w-full",
              "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
              inView && "[&_path]:animate-sketch-lines",
            )}
            width="100%"
            viewBox="0 0 1499 778"
            fill="none"
          >
            <path pathLength="1" d="M1500 72L220 72"></path>
            <path pathLength="1" d="M1500 128L220 128"></path>
            <path pathLength="1" d="M1500 189L220 189"></path>
            <path pathLength="1" d="M220 777L220 1"></path>
            <path pathLength="1" d="M538 777L538 128"></path>
          </svg>
          <img
            src="https://linear-clone-thenameiswiiwin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.a45a5562.webp&w=3840&q=75"
            alt="hero imgae"
            className={classNames(
              "relative z-10 transition-opacity delay-[680ms]",
              inView ? "opacity-100" : "opacity-0",
            )}
          />
        </div>
      </div>
    </div>
  );
}

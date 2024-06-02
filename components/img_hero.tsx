import classNames from "classnames";
import Lines from "./lines";

export default function ImageHero({ inView }: { inView: boolean }) {
  return (
    <div
      className={classNames(
        "relative overflow-hidden   mx-auto  max-w-[1024px] rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full  before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
        inView && "before:animate-image-glow",
        inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
      )}
    >
      <Lines />
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
  );
}

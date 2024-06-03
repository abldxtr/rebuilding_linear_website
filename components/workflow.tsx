import Animate from "./animation";

export default function Workflow() {
  return (
    <div className=" mt-[128px]  ">
      <div>
        {/* 1 */}
        <div className=" w-full text-center  ">
          <h2 className=" text-[48px] md:text-[80px] mx-auto max-w-[1024px] text-center leading-[0.9] font-[450] pt-[-128px] text-[#f7f8f8]   ">
            Linear workflows. Exponential results.
          </h2>
        </div>

        {/* 2 */}
        <Animate />

        {/* 3 */}
        <div className="w-full text-center mt-[96px]  ">
          <h3 className=" max-w-[492px] mx-auto text-center text-[#f7f8f8] text-[24px] font-[450]  ">
            From customer support integrations to powerful Git automations,
            Linear streamlines the entire product development process.
          </h3>
          <div className="flex mt-[40px] items-center justify-center">
            <button className="backdrop:filter-[12px] flex items-center  h-[28px] rounded-full text-[13px] border border-transparent-white bg-white bg-opacity-10 px-[12px] text-off-white transition-colors ease-in hover:bg-opacity-20">
              Discover integrations
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
        </div>
      </div>
    </div>
  );
}

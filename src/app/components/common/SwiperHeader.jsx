import Timer from "../Timer";
import Image from "next/image";
import Button from "./Button";

export const SwiperHeader = ({
  indicator,
  heading,
  timer,
  onNext,
  onPrev,
  Button,
}) => {
  return (
    <div className="w-full">
      <div className="flex md:items-center flex-wrap md:gap-0 xs:gap-6 md:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 w-5 h-12 rounded"></div>
            <span className="text-red-500 font-semibold">{indicator}</span>
          </div>

          <span className="font-[inter] font-normal text-5xl leading-10">
            {heading}
          </span>
        </div>

        {/* Timer */}
        {timer && <Timer />}

        <div className="flex items-center gap-2 relative top-4">
          {Button ? (
            Button
          ) : (
            <>
              <Image
                src="./FillLeft.svg"
                width="40"
                height="40"
                alt="left arrow"
                onClick={onPrev}
                className="cursor-pointer"
              />
              <Image
                src="./FillRight.svg"
                width="40"
                height="40"
                alt="right arrow"
                onClick={onNext}
                className="cursor-pointer"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

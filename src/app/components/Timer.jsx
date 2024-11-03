export default function Timer () {
  return (
    <div className="flex md:items-center xs:items-end gap-4 relative top-4">
      <div className="flex flex-col items-start w-full">
        <p className="text-sm font-normal">Days</p>
        <span className="text-xl font-bold font-[inter]">03</span>
      </div>
      <span className="text-xl text-red-500">:</span>
      <div className="flex flex-col items-start w-full">
        <p className="text-sm font-normal">Hours</p>
        <span className="text-xl font-bold font-[inter]">23</span>
      </div>
      <span className="text-xl text-red-500">:</span>
      <div className="flex flex-col items-start w-full">
        <p className="text-sm font-normal">Minutes</p>
        <span className="text-xl font-bold font-[inter]">37</span>
      </div>
      <span className="text-xl text-red-500">:</span>
      <div className="flex flex-col items-start w-full">
        <p className="text-sm font-normal">Seconds</p>
        <span className="text-xl font-bold font-[inter]">56</span>
      </div>
    </div>
  );
};

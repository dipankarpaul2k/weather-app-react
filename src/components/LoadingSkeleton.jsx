const LoadingSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-0 md:gap-4">
        {/* grid left */}
        <div className="flex flex-col gap-4">
          <div className="skeleton min-h-[250px] grow"></div>
          <div className="skeleton min-h-[250px] grow"></div>
        </div>
        {/* grid right */}
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col lg:flex-row gap-4">
              <div className="skeleton h-52 w-full"></div>
              <div className="skeleton h-52 w-full"></div>
              <div className="skeleton h-52 w-full"></div>
            </div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-32"></div>
            <div className="skeleton h-4 w-32"></div>
            <div className="skeleton h-32"></div>
          </div>
        </div>
      </div>
      {/* daily forecast */}
      <div className="skeleton h-4 w-32 my-4"></div>
      <div className="skeleton h-[300px]"></div>
    </div>
  );
};

export default LoadingSkeleton;

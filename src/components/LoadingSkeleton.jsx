const LoadingSkeleton = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-32 grow"></div>
          <div className="skeleton h-32 grow"></div>
        </div>
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
    </div>
  );
};

export default LoadingSkeleton;

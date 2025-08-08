

const Shimmer = () => {
    return  (
        <div className="w-[240px] h-[370px] mt-[30px] bg-gray-200 border border-gray-300 animate-pulse rounded">
            <div className="p-[5px]">
            {/* Image skeleton */}
                <div className="h-[200px] bg-gray-300 w-full rounded"></div>
                {/* Text skeletons */}
                <div className="mt-3 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>
        </div>  
  )};

export default Shimmer;
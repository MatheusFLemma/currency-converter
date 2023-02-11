export function ContainerSkeleton() {
  return (
    <section className="w-full grid grid-rows-2 lg:gap-y-6">
      <div className="flex flex-col w-full justify-evenly items-center lg:flex-row">
        <div className="h-full bg-gray-300 animate-pulse rounded-xl p-4 w-full max-h-14 lg:w-96" />
        <div className="min-w-[4rem] min-h-[3rem]" />
        <div className="h-full bg-gray-300 animate-pulse rounded-xl p-4 w-full max-h-14 lg:w-96" />
      </div>

      <div className="flex flex-col gap-x-1 w-full justify-center items-baseline lg:flex-row">
        <span className="text-4xl" />
        <div className="text-4xl w-full bg-gray-200 animate-pulse rounded-xl"/>
        <div className="min-w-[1rem] min-h-[1rem]" />
        <span className="text-4xl" />
        <div className="text-4xl w-full bg-gray-200 animate-pulse rounded-xl"/>
        <div className="min-w-[1rem] min-h-[1rem]" />
      </div>
    </section>
  );
}

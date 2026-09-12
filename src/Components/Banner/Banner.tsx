import bannerStack from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-350 mx-auto w-full bg-white">
      <div
        className=" container mx-auto px-6  min-h-[calc(100vh-64px)]  py-10 flex flex-col  items-center justify-start lg:min-h-100 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-8"
      >
        <div
          className=" w-full text-center lg:w-1/2 lg:max-w-150 lg:text-left"
        >
          <h1
            className="text-[36px]  leading-[1.05]  font-extrabold text-gray-900  sm:text-[42px] lg:text-[42px] xl:text-[46px]"
          >
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p
            className="mt-5 mx-auto max-w-92.5 text-[15px] leading-6 text-gray-600 lg:mx-0  lg:max-w-125 lg:text-[14px] lg:leading-5"
          >
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div
            className="mt-7 flex justify-center gap-3 lg:justify-start">

            <button
              className="btn h-11 min-h-0 rounded-lg border-none px-5 text-sm text-white brand-gradient hover:opacity-90">
              Explore Technologies
            </button>

            <button
              className="btn h-11 min-h-0 rounded-lg border border-gray-300 bg-white px-7 text-sm text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-6 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-82.5 h-auto object-contain sm:w-90 lg:w-97.5 xl:w-107.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

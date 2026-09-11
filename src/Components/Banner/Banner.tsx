import bannerStack from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-350 mx-auto w-full bg-white">
      <div
        className="
          container mx-auto px-6

          /* Mobile */
          min-h-[calc(100vh-64px)]
          py-10
          flex flex-col
          items-center
          justify-start

          /* Desktop */
          lg:min-h-[400px]
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-12
          lg:py-8
        "
      >
        {/* ================= TEXT ================= */}
        <div
          className="
            w-full
            text-center

            lg:w-1/2
            lg:max-w-[600px]
            lg:text-left
          "
        >
          {/* Heading */}
          <h1
            className="
              text-[36px]
              leading-[1.05]
              font-extrabold
              text-gray-900

              sm:text-[42px]

              lg:text-[42px]
              xl:text-[46px]
            "
          >
            Build Your Ideal
            <br />
            <span
              className="
                bg-gradient-to-r
                from-orange-500
                via-pink-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              mx-auto
              max-w-[370px]
              text-[15px]
              leading-6
              text-gray-600

              lg:mx-0
              lg:max-w-[500px]
              lg:text-[14px]
              lg:leading-5
            "
          >
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              justify-center
              gap-3

              lg:justify-start
            "
          >
            <button
              className="
                btn
                h-11
                min-h-0
                rounded-lg
                border-none
                px-5
                text-sm
                text-white
                bg-gradient-to-r
                from-orange-500
                to-pink-500
                hover:from-orange-600
                hover:to-pink-600
              "
            >
              Explore Technologies
            </button>

            <button
              className="
                btn
                h-11
                min-h-0
                rounded-lg
                border
                border-gray-300
                bg-white
                px-7
                text-sm
                text-gray-700
                hover:bg-gray-50
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            mt-6
            flex
            w-full
            justify-center

            lg:mt-0
            lg:w-1/2
            lg:justify-end
          "
        >
          <img
            src={bannerStack}
            alt="Development Stack"
            className="
              w-[330px]
              h-auto
              object-contain

              sm:w-[360px]

              lg:w-[390px]
              xl:w-[430px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

const TechnologyHeader = () => {
  return (
    <section className="max-w-330 mx-auto w-full px-4 py-8">
      <h2 className="text-3xl text-center lg:text-left md:text-4xl font-extrabold text-gray-900">
        Explore the{" "}
        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="mt-2 text-[17px] lg:text-left md:text-lg text-center text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>
    </section>
  );
};

export default TechnologyHeader;
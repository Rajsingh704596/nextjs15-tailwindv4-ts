const Hero = () => {
  return (
    <div className="px-4 py-4 flex items-center flex-col w-full my-20">
      {/* badge */}
      <div className="border border-neutral-200 bg-gray-100 text-gray-600 px-4 py-1 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer ">
        what are early stage tax requirements? &rarr;
      </div>

      <div>
        <h1 className="font-medium text-6xl text-black tracking-tight text-center mt-10">
          Magically simplify <br /> accounting and taxes
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-700 text-center mt-6 flex flex-col ">
          <span>
            Automated bookkeeping, effortless tax filing, real‑time insights.
          </span>
          <span> Set up in 10 mins. Back to building by 2:45pm.</span>
        </p>
      </div>

      <div className="flex items-center gap-5 my-5">
        <button className="bg-[#2579f4] px-4 py-1 rounded-lg text-white font-medium shadow-lg text-shadow-md tracking-wide hover:bg-blue-500 cursor-pointer">
          Start free trial
        </button>
        <button className=" px-4 py-1 rounded-lg  cursor-pointer tracking-wide hover:bg-white/40">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;

const Button = () => {
  return (
    <>
      <button className="group relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-1.5 text-sm text-white transition-shadow duration-300 ease-in-out text-shadow-neutral-600 text-shadow-xs hover:shadow-[0_0_5px_rgba(255,255,255,0.7)] sm:text-base">
        <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent transition-all duration-300 group-hover:h-0.5"></div>
        Join waitlist
      </button>
    </>
  );
};

export default Button;

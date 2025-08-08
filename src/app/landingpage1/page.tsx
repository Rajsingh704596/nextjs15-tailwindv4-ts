import Button from "./Button";
import "./landingpage.css";
import particles from "./Particles";

const Page = () => {
  return (
    <div className="h-screen text-white">
      <div className="relative h-full w-full overflow-hidden bg-neutral-950">
        <div className="[background:radial-gradient(circle at 10% 10%, #ffffff 0%, #ff0000 40%, #1a1a1a 100%)] absolute inset-0 -z-10 h-full w-full"></div>

        {/* Render particles for background effect*/}
        {particles.map((particle, index) => (
          <div
            key={index}
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              animation: particle.animation,
              opacity: particle.opacity,
              position: "absolute",
              borderRadius: "9999px",
              backgroundColor: "white",
            }}
          ></div>
        ))}

        {/* Header content */}
        <div className="mx-auto max-w-2xl md:max-w-7xl">
          <header className="flex items-center justify-between px-5 py-8">
            <div className="text-xl font-bold">Web Dev 🎯</div>
            <div className="flex items-center gap-10">
              <div className="cursor-pointer text-neutral-400 transition hover:text-white">
                Blog
              </div>
              <Button />
            </div>
          </header>

          {/* Hero section */}
          <section className="my-20 flex flex-col items-center">
            <h1 className="font-manro max-w-xl bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-5xl leading-snug font-bold tracking-wide text-transparent">
              Unleash the power of intuitive finance
            </h1>
            <p className="font-geist mx-auto mt-10 max-w-3xl text-center text-neutral-400 selection:bg-white">
              say Goodbye to the Outdated tool. Every small
              <span className="text-primary"> business owner</span>, regardless
              of the background, can now manage their
              <span className="text-primary"> business</span> like a pro.
              simple. Intuitive. and never boring.
            </p>
            <p className="mt-4 mb-14 text-neutral-500">
              The future is glowing ✨
            </p>

            <div className="flex w-full max-w-lg items-center justify-center gap-10">
              <input
                type="text"
                placeholder="Enter your email"
                className="focus:ring-primary flex-1 rounded-xl border border-neutral-600 px-4 py-1.5 text-white transition duration-200 placeholder:text-neutral-50 focus:ring-1 focus:outline-none"
              />
              {/* button */}
              <Button />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import Container from "./components/container";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

//^ Using Tailwind Css

const page = () => {
  return (
    <div className="relative h-screen [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="absolute inset-0 mx-auto h-full w-full max-w-7xl">
        {/* left line */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
        {/* right line */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-x-0 z-0 h-px w-full bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100">
          <div className="mx-auto max-w-6xl p-4">
            <Image
              src="/hero-ui-v5.webp"
              alt="banner image"
              width={1000}
              height={1000}
              className="w-full rounded-2xl border-neutral-200 to-40% mask-b-from-20% object-cover object-left-top shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

//^ Using only Vanilla css

// import Container from "@/Components/Container";
// import HeroImage from "@/Components/HeroImage";
// import Navbar from "@/Components/Navbar";

// export default function Home() {
//   return (
//     <div className="layout">
//       <div className="layout-lines-container">
//         <div className="left-line" />
//         <div className="right-line" />
//       </div>

//       <Container>
//         <Navbar />
//         <Hero />
//       </Container>
//       <HeroImage />
//     </div>
//   );
// }

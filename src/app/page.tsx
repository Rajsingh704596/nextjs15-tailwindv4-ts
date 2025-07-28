import Image from "next/image";
import Container from "./components/container";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

//^ Using Tailwind Css

const page = () => {
  return (
    <div className="h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full ">
        {/* left line */}
        <div
          className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0
      "
        ></div>
        {/* right line */}
        <div
          className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0
      "
        ></div>
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 pointer-events-none z-0 ">
          <div className="max-w-6xl mx-auto p-4">
            <Image
              src="/hero-ui-v5.webp"
              alt="banner image"
              width={1000}
              height={1000}
              className="rounded-2xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-20% to-40%"
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

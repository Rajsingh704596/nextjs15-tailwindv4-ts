import Container from "@/Components/Container";
import Hero from "@/Components/Hero";
import HeroImage from "@/Components/HeroImage";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>

      <Container>
        <Navbar />
        <Hero />
      </Container>
      <HeroImage />
    </div>
  );
}

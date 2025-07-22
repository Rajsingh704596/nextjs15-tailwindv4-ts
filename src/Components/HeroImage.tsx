import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <div className="horizontal-line"></div>
      <Image
        src="/hero-ui-v5.webp"
        alt="hero-image"
        width={1000}
        height={500}
        className="hero-image"
      ></Image>
    </div>
  );
};

export default HeroImage;

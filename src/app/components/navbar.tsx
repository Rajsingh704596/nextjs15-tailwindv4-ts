import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // Array of object
  const links = [
    { title: "Guide", href: "#" },
    { title: "pricing", href: "#" },
    { title: "Log In", href: "#" },
  ];
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          src="./logo.svg"
          alt="logo-image"
          height={50}
          width={50}
          draggable={false}
          loading="lazy"
        />
      </Link>

      <div className="flex items-center gap-10">
        {links?.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className=" text-neutral-800 hover:text-neutral-500 font-medium transition duration-300"
          >
            {link.title}
          </Link>
        ))}

        <button className="bg-[#2579f4] px-4 py-1 rounded-lg text-white font-medium shadow-lg text-shadow-md tracking-wide hover:bg-blue-500 cursor-pointer">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Navbar;

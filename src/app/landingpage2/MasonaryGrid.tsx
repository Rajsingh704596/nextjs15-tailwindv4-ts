import Image from "next/image";
import { cn } from "../lib/utils";
import Link from "next/link";

const MasonaryGrid = () => {
  return (
    <div className="mx-auto h-screen w-full max-w-4xl pt-20 pb-10">
      <Heading />

      <Grid />
    </div>
  );
};

export default MasonaryGrid;

const Heading = () => {
  return (
    <>
      <h1 className="px-4 text-3xl font-bold tracking-tight md:px-8 md:text-4xl">
        Bento Grid Are Good : It is e.g. of Masonary Grid Layout
      </h1>
      <p className="mt-5 text-base text-neutral-700 md:max-w-3xl">
        Discover innovative solutions that transform the way you work and
        create. Our Cutting-edge tools are designed to empower your creativity
        and boost your productivity like never before.
      </p>
    </>
  );
};

const Grid = () => {
  return (
    <div className="my-10 grid grid-cols-1 gap-3 rounded-3xl mask-b-from-50% p-2 md:grid-cols-2 lg:grid-cols-4">
      {/* col-1 */}
      <Column>
        <Card
          src="/images/img-1.png"
          alt="img-1"
          className="lg:rounded-tl-[calc(24px-8px)]"
          href="https://link.com"
        />
        <Card
          src="/images/img-2.png"
          alt="img-2"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-3.png"
          alt="img-3"
          className=""
          href="https://link.com"
        />
      </Column>
      {/* col-2 */}
      <Column>
        <Card
          src="/images/img-4.png"
          alt="img-4"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-5.png"
          alt="img-5"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-6.png"
          alt="img-6"
          className=""
          href="https://link.com"
        />
      </Column>
      {/* col-3 */}
      <Column>
        <Card
          src="/images/img-7.png"
          alt="img-7"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-8.png"
          alt="img-8"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-4.png"
          alt="img-4"
          className=""
          href="https://link.com"
        />
      </Column>
      {/* col-4 */}
      <Column>
        <Card
          src="/images/img-3.png"
          alt="img-3"
          className="lg:rounded-tr-[calc(24px-8px)]"
          href="https://link.com"
        />
        <Card
          src="/images/img-5.png"
          alt="img-2"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-1.png"
          alt="img-1"
          className=""
          href="https://link.com"
        />
        <Card
          src="/images/img-5.png"
          alt="img-5"
          className=""
          href="https://link.com"
        />
      </Column>
    </div>
  );
};

// use only for readability
const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

// card
const Card = ({
  src,
  alt,
  className,
  href,
}: {
  src: string;
  alt: string;
  className: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("card overlay group rounded-md", className)}
    >
      <Image src={src} alt={alt} height={500} width={500} className="w-full" />
      <p className="absolute inset-0 z-20 m-auto flex items-center justify-center text-sm font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
        {href.split("https://")[1]}
      </p>
    </Link>
  );
};

//Main Container which pass inside root page

import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string; // className optional but it would be string
}) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto p-4 w-full relative z-10", className)}
    >
      {children}
    </div>
  ); // children render inside of it
};

export default Container;

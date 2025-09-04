import React from "react";
import { cn } from "../lib/utils";

export const Form = () => {
  return (
    <form className="mx-auto h-full w-full max-w-4xl bg-gray-100 px-8 py-14 dark:bg-neutral-900">
      <h1 className="bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-700 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent selection:bg-black selection:text-white dark:from-white dark:to-gray-300">
        This is a{" "}
        <span
          className={cn(
            "relative z-10 inline-block text-white",
            "after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          good
        </span>{" "}
        form.
      </h1>

      <div className="mx-auto my-12 flex max-w-sm flex-col gap-8">
        <Group>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            disabled
            id="firstname"
            type="text"
            placeholder="Enter your name"
            className="disabled:cursor-not-allowed disabled:opacity-50"
          />
        </Group>

        <Group>
          <Label
            htmlFor="email"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="invalid:border-red-500 invalid:shadow-none"
          />
        </Group>

        <Group>
          <Label
            htmlFor="company"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Company
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Enter your company name"
          />
        </Group>

        <Group>
          <Label
            htmlFor="message"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Message
          </Label>
          <Input id="message" type="text" placeholder="Enter your message" />
        </Group>

        <button className="relative cursor-pointer overflow-hidden rounded-md bg-black px-4 py-2 text-white transition-all duration-150 after:absolute after:-top-20 after:-left-20 after:h-[400px] after:w-1/2 after:-translate-x-20 after:rotate-10 after:bg-white/10 after:backdrop-blur-[0.5px] after:transition-all after:duration-200 after:content-[''] hover:-translate-y-0.5 hover:bg-neutral-700 hover:after:translate-x-[200%] active:scale-98 dark:bg-white dark:text-black dark:after:bg-black/10 dark:hover:bg-gray-200">
          Send that text now
        </button>
      </div>
    </form>
  );
};

const Group = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-md p-2 has-invalid:bg-red-50 dark:has-invalid:bg-red-950",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Label = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={cn(
        "font-medium text-neutral-700 dark:text-neutral-200",
        className,
      )}
    >
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "shadow-input rounded-lg border border-transparent bg-white px-4 py-2 transition-all duration-200 placeholder:text-neutral-300 focus:border-gray-300 focus:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none",
        "dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-gray-600 dark:focus:bg-neutral-700 dark:focus:ring-gray-500",
        className,
      )}
    />
  );
};

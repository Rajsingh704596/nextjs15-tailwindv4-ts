import React from "react";

const cn = (...classes: string[]) => classes.join(" ");

export const TransformCard3D = () => {
  return (
    <div
      className={cn(
        "min-h-100 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "group flex flex-col items-center justify-center p-8",
      )}
    >
      <h2
        className={cn(
          "mt-8 mb-2 text-2xl font-bold tracking-tight",
          "text-neutral-800 text-shadow-neutral-300 text-shadow-sm dark:text-neutral-100 dark:text-shadow-neutral-600",
        )}
      >
        Easily modify scale with Tailwind
      </h2>
      <p className="mx-auto mb-8 max-w-sm bg-gradient-to-b from-neutral-800 to-neutral-400 bg-clip-text text-center text-sm text-transparent dark:from-neutral-100 dark:to-neutral-600">
        Hover over the image below to see a smooth 3D transformation effect. The
        card rotates and scales using CSS transforms and Tailwinds built-in
        classes.
      </p>
      <div
        className={cn(
          "size-60 rounded-2xl border border-neutral-200 bg-neutral-100 transition-all duration-200 group-hover:border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800",
          "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "relative shadow-2xl perspective-distant",
          "group-hover:bg-neutral-200 dark:group-hover:border-neutral-600 dark:group-hover:bg-neutral-700",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={cn(
            "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
            "h-full w-full rounded-2xl object-cover object-top-left",
            "translate-z-20 rotate-x-30 -rotate-y-30 rotate-z-30 transform",
            "group-hover:scale-85 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0",
          )}
          alt="avatar"
        />
      </div>
    </div>
  );
};

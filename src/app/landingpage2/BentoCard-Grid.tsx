/** 
 //? Bento = Ek aisa modular layout pattern jisme alag size ke cards visually interesting tarike se grid mein arrange kiye jate hain — jaise ek Bento lunch box.
 //! Bento Grid layout inside Bento Card using Tailwind CSS.
 * - Responsive 1–2 column layout
 * - Card-based structure with icons and descriptions 
 * - Includes dark mode support
 * - Example usage of custom and interactive components
 */

import { cn } from "@/app/lib/utils";
import React from "react";
import { BrainIcon, ForkIcon, MouseBoxIcon } from "@/app/assets/AllSvgIcon";

//^ Grid component rendering all cards in a responsive layout.

export const Grid = () => {
  return (
    <div className="mx-auto min-h-screen max-w-5xl border-x border-neutral-200 bg-gray-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="grid grid-cols-1 divide-x divide-y divide-neutral-100 lg:grid-cols-2 dark:divide-neutral-800">
        {/* Card 1 - LLM Model Selector */}
        <Card>
          <CardHeader>
            <BrainIcon />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full" />
          </CardSkeleton>
        </Card>

        {/* Card 2 - Text to workflow builder */}
        <Card>
          <CardHeader>
            <MouseBoxIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="bg-white dark:bg-neutral-800">
            <MainSkeletonWithChat />
          </CardSkeleton>
        </Card>

        {/* Card 3 - Native tools integration (spans 2 cols on large screens) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <ForkIcon />
            <CardTitle>Native tools integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Integrate with native tools to create workflows that can interact
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full" />
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

/**
 * CardSkeleton: Skeleton/placeholder background using radial gradient
 */
const CardSkeleton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "my-4 h-60 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-800",
        "bg-[radial-gradient(var(--tw-bg-opacity)_1px,_transparent_1px)]",
        "[background-size:10px_10px]",
        "mask-radial-from-50%",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * Card: Generic container with padding and background
 */
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-transparent bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader: Horizontal row for icon and title
 */
const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

/**
 * CardTitle: Headline style
 */
const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-lg font-medium tracking-tight dark:text-white",
        className,
      )}
    >
      {children}
    </h2>
  );
};

/**
 * CardDescription: Subtext paragraph
 */
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-base text-neutral-400 dark:text-neutral-500",
        className,
      )}
    >
      {children}
    </p>
  );
};

/**
 * MainSkeletonWithChat: Chat-like placeholder for message previews
 */
const MainSkeletonWithChat = () => {
  const chat = [
    { role: "user", text: "hello there" },
    { role: "assistant", text: "hello there! How can I help you today?" },
    { role: "user", text: "I want to create a new workflow" },
    {
      role: "assistant",
      text: "Sure, I can help you with that. What would you like to build?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="ml-auto flex w-fit items-start justify-end gap-2 rounded-tl-full rounded-tr-full rounded-br-lg rounded-bl-full bg-blue-500 px-2 py-1">
        <p className="text-sm text-white">{text}</p>
        <div className="size-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="mr-auto flex w-fit items-start justify-start gap-2 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-lg bg-gray-100 px-2 py-1 dark:bg-neutral-800">
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
        <p className="text-sm text-black dark:text-white">{text}</p>
      </div>
    );
  };

  return (
    <div className="relative z-20 flex h-full w-full flex-col gap-4 px-12 py-2">
      {/* Fake input box for placeholder */}
      <input
        type="text"
        placeholder="Type your message here..."
        className="absolute inset-x-0 bottom-0 mx-auto h-10 w-[calc(100%-4rem)] rounded-md border border-neutral-200 bg-white px-4 text-xs text-black placeholder-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
      />
      {/* Render messages */}
      {chat.map((message, idx) =>
        message.role === "user" ? (
          <UserMessage key={idx} text={message.text} />
        ) : (
          <AIMessage key={idx} text={message.text} />
        ),
      )}
    </div>
  );
};

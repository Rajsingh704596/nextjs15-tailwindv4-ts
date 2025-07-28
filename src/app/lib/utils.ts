import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

//!cn(...) Ka Main Use
//# cn(...inputs) combines clsx aur tailwind-merge ka power:

//^ clsx(...inputs) allows conditional class names, e.g. isActive && "bg-red".

//^ tailwind-merge(...) resolves conflicting Tailwind utility classes intelligently, so agar multiple background colors specify ho, latest override ho jaaye.( jo baad m aa rhi hai same class to use kar leta hai, so duplicate class remove)

//@ Ye function styled-components ya shadcn/ui jaise libraries me extensively use hota hai, lekin ye developer boilerplate common use-cases ke liye bhi useful hai (especially conditional styling and overriding).

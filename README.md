---

# 🚀 Next.js 15 + Tailwind CSS v4 Starter (TypeScript)

A modern, minimal starter template built with:

- **Next.js 15** (App Router + TypeScript)
- **Tailwind CSS v4**
- Utility helpers: **`clsx`** and **`tailwind-merge`** via a `cn()` function for smart, conditional class handling

---

## 📦 Tech Stack

| Tool / Library      | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| **Next.js 15**      | React-based framework with App Router & TypeScript |
| **Tailwind CSS v4** | Utility-first CSS framework                        |
| **TypeScript**      | Static typing for safety and better DX             |
| **clsx**            | Conditionally combine class names                  |
| **tailwind-merge**  | Resolve conflicting Tailwind classes automatically |

---

## ⚙️ Getting Started

### 1. Create a New Project with Tailwind + TypeScript

```bash
npx create-next-app@latest my-app -e with-tailwindcss --typescript
cd my-app
```

### 2. Install Additional Utilities

```bash
npm install clsx tailwind-merge
```

These libraries are used in the `cn()` utility function for managing class names cleanly and efficiently.

---

## 🛠️ `cn()` Utility Function

This function combines the strengths of:

- **`clsx`** – for conditional class logic like `isActive && "bg-red"`
- **`tailwind-merge`** – to automatically merge or override conflicting Tailwind utility classes for intelligently resolving

> Helps keep your Tailwind `className` usage clean, conflict-free, and readable.

```ts
// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
```

### 📌 Example Usage

```tsx
<button className={cn("bg-blue-500 px-4", isActive && "bg-green-500", "px-6")}>
  Click Me
</button>
```

🔍 Output if `isActive = true`:

```html
class="bg-green-500 px-6"
```

- `bg-green-500` overrides `bg-blue-500`
- `px-6` overrides `px-4`

---

## 📁 Project Structure

```
src/
├── app/              # App Router entry points (layout.tsx, page.tsx)
├── components/       # Shared UI components
├── lib/
│   └── utils.ts      # cn() utility function
├── styles/
│   └── globals.css   # Global CSS & font imports
```

---

## 🖋 Fonts (Optional)

You can import a custom Google font in `globals.css`. For example:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

* {
  font-family: "Inter", sans-serif;
}
```

---

## 📜 Scripts

```bash
npm run dev     # Start development server
npm run build   # Build production bundle
npm run start   # Start production server
```

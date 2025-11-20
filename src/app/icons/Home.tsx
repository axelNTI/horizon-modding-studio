import type { SVGProps } from "react";

export function MaterialSymbolsHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Home</title>
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"
      />
    </svg>
  );
}

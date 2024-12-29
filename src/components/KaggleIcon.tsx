import { SVGProps } from 'react';

export function KaggleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h4.5l.5-1 4-7v8h4V3h-4.5L7 12V3H3z" />
    </svg>
  );
}
import type { SVGProps } from "react";

export const Icons = {
  react: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="-10.5 -9.45 21 18.9" fill="none" {...props}>
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  nextjs: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM39.5232 38.3522H52.7538L80.0333 76.2494V38.3522H90.2241V90.2244H76.9935L49.714 52.3273V90.2244H39.5232V38.3522Z"
        fill="currentColor"
      />
    </svg>
  ),
  typescript: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#1976d2" d="M24,4,4,24V44H44V4Z" />
      <path
        fill="#fff"
        d="M21.5,23.5v-7h-5v21h5V29.3l7.9,8.2,7.6-7.2-7.9-7.1,7.6-7.2-7.6-6.7Z"
      />
    </svg>
  ),
  javascript: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="#fdd835" d="M32,42H16a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V40A2,2,0,0,1,32,42Z"/>
      <path fill="#263238" d="M25,32a4.4,4.4,0,0,1-4,4,4.3,4.3,0,0,1-4-4,4.4,4.4,0,0,1,4-4A4.3,4.3,0,0,1,25,32Zm7-12a4.4,4.4,0,0,1-4,4,4.3,4.3,0,0,1-4-4,4.4,4.4,0,0,1,4-4A4.3,4.3,0,0,1,32,20Z"/>
    </svg>
  ),
  firebase: (props: SVGProps<SVGSVGElement>) => (
     <svg viewBox="0 0 48 48" {...props}>
        <path fill="#f57c00" d="M22,38,6,13l10-9,27,5Z" />
        <path fill="#ffca28" d="M37,3,6,13,10.5,4,37,3A1,1,0,0,0,37,3Z" />
        <path fill="#ffa000" d="M22,38,37,3,34,38Z" />
        <path fill="#f57c00" d="M6,13,22,5,10.5,4Z" />
     </svg>
  ),
  genkit: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 0L0 1.95556V19.4444L11.6667 24L23.3333 19.4444V1.95556L11.6667 0ZM11.6667 3.91111L3.88889 5.86667V16.3556L11.6667 18.3111L19.4444 16.3556V5.86667L11.6667 3.91111Z" fill="currentColor"/>
    </svg>
  ),
};

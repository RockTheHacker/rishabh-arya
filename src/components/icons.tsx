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
  mongodb: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
    </svg>
  ),
  nodejs: (props: SVGProps<SVGSVGElement>) => (
     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.623,10.222,12.378,5.344a.25.25,0,0,0-.247,0L9.5,6.885V4.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5v15a.5.5,0,0,0,.5.5h5.5a.5.5,0,0,0,.5-.5V17.115l2.628,1.541,8.245-4.878A.25.25,0,0,0,20.623,10.222Zm-11.37,5.016L3.5,11.96v-7h5v2.85l5.628,3.313-5.625,3.314Z"/>
    </svg>
  )
};

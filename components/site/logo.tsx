import { tokens } from '@sparkpost/design-tokens';
import { Box } from '@sparkpost/matchbox';

const Logo = () => {
  return (
    <Box height="700" display="flex" alignItems="flex-end" position="relative">
      <Box as="a" display="block" height="100%" href="https://www.sparkpost.com">
        <svg height="100%" viewBox="0 0 500 193">
          <path
            fill={tokens.color_brand_gray}
            d="m-.1 116.06 7.79-9.33c5.4 4.45 11.05 7.28 17.9 7.28 5.4 0 8.65-2.14 8.65-5.65v-.17c0-3.34-2.06-5.05-12.07-7.62C10.09 97.48 2.3 94.14 2.3 82.23v-.17c0-10.88 8.73-18.07 20.98-18.07 8.73 0 16.18 2.74 22.26 7.62l-6.85 9.93c-5.31-3.68-10.53-5.91-15.58-5.91-5.05 0-7.71 2.31-7.71 5.22v.17c0 3.94 2.57 5.22 12.93 7.88 12.16 3.17 19.01 7.54 19.01 17.98v.17c0 11.9-9.07 18.58-22 18.58-9.09.02-18.25-3.15-25.44-9.57zM55.43 64.85h24.49c14.3 0 22.95 8.48 22.95 20.72v.17c0 13.87-10.79 21.07-24.23 21.07H68.62v17.98H55.43V64.85zm23.63 30.23c6.59 0 10.44-3.94 10.44-9.08v-.17c0-5.91-4.11-9.08-10.7-9.08H68.62v18.33h10.44zM121.53 64.42h12.16l25.69 60.37h-13.79l-5.48-13.44h-25.34l-5.48 13.44H95.84l25.69-60.37zM135.4 99.7l-7.97-19.44-7.96 19.44h15.93zM165.62 64.85h27.4c7.62 0 13.53 2.14 17.47 6.08 3.34 3.34 5.14 8.05 5.14 13.7v.17c0 9.68-5.22 15.76-12.85 18.58l14.64 21.41h-15.41l-12.85-19.18H178.8v19.18h-13.19V64.85zm26.54 29.11c6.42 0 10.1-3.43 10.1-8.48v-.17c0-5.65-3.94-8.56-10.36-8.56h-13.1v17.21h13.36zM285.73 64.85h21.75c13.19 0 22.27 6.76 22.27 18.33v.17c0 12.59-10.88 19.09-23.38 19.09h-16.18v22.35h-4.45V64.85zm20.9 33.48c11.13 0 18.67-5.82 18.67-14.73v-.17c0-9.51-7.36-14.47-18.15-14.47H290.2v29.37h16.43zM401.06 116.06l2.91-3.34c6.59 6.08 12.67 8.91 21.49 8.91 8.99 0 15.16-5.05 15.16-11.9v-.17c0-6.34-3.34-10.02-16.96-12.76-14.38-2.91-20.21-7.79-20.21-16.87v-.17c0-8.91 8.14-15.76 19.27-15.76 8.74 0 14.47 2.4 20.55 7.28l-2.83 3.51c-5.65-4.88-11.3-6.76-17.9-6.76-8.82 0-14.64 5.05-14.64 11.3v.17c0 6.34 3.25 10.19 17.47 13.1 13.87 2.83 19.7 7.79 19.7 16.53v.17c0 9.68-8.31 16.36-19.87 16.36-9.58-.01-16.94-3.18-24.14-9.6zM470.76 68.96h-20.9v-4.11h46.24v4.11h-20.89v55.83h-4.45V68.96zM237.82 90.07l20.75-25.22h16.1l-24.34 28.47 26.1 31.47h-16.96l-21.64-26.76v26.76h-13.19V64.85h13.19v25.22z"
          />
          <path
            fill={tokens.color_brand_orange}
            d="M387.37 51.19c-6.68 5.04-7.97 13.93-8.17 19.93-10.55-12.2 19.54-48.11-14.66-70.3 21.17 27.4-30.12 54.33-30.12 94.69 0 15.82 9.89 29.76 31.6 34.6 21.3-4.53 31.81-18.78 31.81-34.6 0-23.58-14.68-31.47-10.46-44.32zm-21.3 66c-11.6 0-21-9.4-21-21s9.4-21 21-21 21 9.4 21 21c-.01 11.6-9.41 21-21 21z"
          />
          <path
            fill={tokens.color_brand_gray}
            d="m5.52 181.92 2.27-6.39h12.22l2.27 6.39h4.09L16.02 154.5h-4.09L1.58 181.92h3.94zm13.41-9.44H8.87l5.03-14.11 5.03 14.11z"
          />
          <path
            fill={tokens.color_brand_gray}
            d="M47.29 181.92V162.6l6.16 11.99h3.45l6.16-11.99v19.32h5.96V154.5h-7.25l-6.41 12.44L49 154.5h-7.69v27.43h5.98zm38.01.49c4.78.16 9.89-2.68 10.4-7.86h-5.91c-.38 3.65-5.86 4.31-7.9 1.82-.83-.98-1.27-2.49-1.32-4.52H95.8c.14-3.91-.71-7.59-3.45-9.94-3.98-3.19-10.39-3.2-14.33.05-3.73 3.09-4.2 10.13-2.49 14.45 1.56 4.11 5.63 6.05 9.77 6zm4.43-13.86h-9.07c.34-2.85 1.69-4.55 4.53-4.57 2.85.02 4.21 1.72 4.54 4.57zm19.82 13.86c3.24-.02 6.97-.78 8.77-3.69 1-1.47 1.12-4.36.28-5.97-1.09-2.32-3.58-3.25-5.9-3.91-1.93-.78-6.56-.7-6.6-3.15-.01-1.49 1.44-2.06 2.81-2.06 1.8-.03 3.3 1.01 3.4 2.8h6.01c-.19-4.8-4.94-7.02-9.27-6.88-3.05.02-6.58.74-8.24 3.5-1.4 2.29-.91 6.03 1.37 7.59 1.96 1.5 4.86 2.05 7.11 2.63 1.29.34 2.52.57 3.36 1.38.79.83.48 2.46-.52 3.04-2.33 1.5-6.89.37-6.93-2.9h-6.01c.26 5.33 5.53 7.78 10.36 7.62zm23.28 0c3.24-.02 6.97-.78 8.77-3.69 1-1.47 1.12-4.36.28-5.97-1.09-2.32-3.58-3.25-5.9-3.91-1.93-.78-6.56-.7-6.6-3.15-.01-1.49 1.44-2.06 2.81-2.06 1.8-.03 3.3 1.01 3.4 2.8h6.01c-.19-4.8-4.94-7.02-9.27-6.88-3.05.02-6.58.74-8.24 3.5-1.4 2.29-.91 6.03 1.37 7.59 1.96 1.5 4.86 2.05 7.11 2.63 1.29.34 2.52.57 3.36 1.38.79.83.48 2.46-.52 3.04-2.33 1.5-6.89.37-6.93-2.9h-6.01c.27 5.33 5.54 7.78 10.36 7.62zm31.8 0c1.34.01 2.88-.32 3.89-.93v-4.13c-.99.55-3.06.88-2.91-.84v-8.45c.19-5.77-3.22-8.66-8.97-8.5-5.03-.18-10.04 2.34-9.91 8.11h5.72c.02-1.15.29-2.03.81-2.65.67-1 3.42-1.18 4.61-.63 1.79.81 1.65 2.96 1.68 4.71-3.93.5-9.23 0-12.24 3.06-1.64 1.67-1.86 4.86-.91 6.91 2.67 5.08 11.15 3.99 14.23-.09-.21 2.32 1.73 3.53 4 3.43zm-9.76-4.17c-1.04 0-1.79-.21-2.25-.63-1.08-.91-.89-3.23.35-3.92 1.22-.94 4.89-1.06 6.59-1.3v4.08c-1.38 1.09-2.84 1.78-4.69 1.77zm26.47 13.9c3.19-.02 6.29-.41 8.8-1.92 2.93-1.6 4.11-5.61 2.56-8.49-1.51-2.66-4.75-3.29-7.66-3.31-1.56-.11-6.93.34-8.11-.47-1.45-.79-.73-2.43.47-2.97 6.32 2.2 15.43-1.7 13.26-9.54 1.22-.56 2.44-.56 3.94-.59v-5.31c-2.55-.02-4.54.83-5.82 2.75-4.42-4.07-12.94-3.75-16.28 1.57-1.89 3.12-.81 7.93 2.33 9.83-4.1 1.44-4.91 6.36-.69 8.21-2.93.88-4.84 3.97-2.98 6.76 2.25 3.04 6.37 3.4 10.18 3.48zm-.05-20.84c-5.33.28-5.35-7.7-.05-7.47 5.32-.27 5.35 7.71.05 7.47zm.24 17.01c-2.12 0-3.64-.26-4.55-.77-1.89-.91-1.73-3.46.01-4.24h6.95c1.28 0 2.21.16 2.78.49.58.33.86.85.86 1.57-.17 2.76-3.31 2.84-6.05 2.95zm25.58-5.9c4.78.16 9.89-2.68 10.4-7.86h-5.91c-.38 3.65-5.86 4.31-7.9 1.82-.83-.98-1.27-2.49-1.32-4.52h15.23c.14-3.91-.71-7.59-3.45-9.94-3.98-3.19-10.39-3.2-14.33.05-3.73 3.09-4.2 10.13-2.49 14.45 1.57 4.11 5.63 6.05 9.77 6zm4.44-13.86h-9.07c.34-2.85 1.69-4.55 4.53-4.57 2.85.02 4.2 1.72 4.54 4.57zm23.66 13.37c3.5 0 6.15-.69 7.95-2.08 2.86-1.91 3.63-7.27 1.48-9.93-.81-.99-1.95-1.72-3.41-2.2 4.58-1.64 4.48-8.69.89-11.22-1.74-1.34-4.29-2-7.64-2h-11.44v27.43h12.17zm-1.38-16.32h-4.53v-6.19c1.45.06 5.45-.15 6.73.21 2.05.31 2.62 2.46 2.05 4.17-.68 1.64-2.49 1.77-4.25 1.81zm.64 11.41h-5.18v-6.78c1.62.07 6.18-.19 7.6.25 2.24.37 2.94 2.67 2.28 4.56-.75 1.81-2.75 1.92-4.7 1.97zm22.97-22.22v-5.41h-6.41v5.41h6.41zm-.15 27.13v-21.87h-6.11v21.87h6.11zm12.27 0v-15.53c1.68-2.11 5.32-2.16 7.69-1.13v-5.21c-2.99-1.32-6.98-.07-8.38 3v-3h-5.42v21.87h6.11zm19.25.49c2.56.02 5.14-.99 6.51-3.1v2.61h5.42v-32.54h-6.11v12.73c-2.89-3.61-9.15-3.25-12.24.07-3.23 3.28-3.62 9.9-2.14 14.13 1.27 3.84 4.68 6.15 8.56 6.1zm1.82-5.01c-5.53.33-6.03-7.9-3.73-11.19 1.6-2.26 5.8-2.05 7.73-.16v9.88c-1.05.96-2.49 1.48-4 1.47z"
          />
          <path
            fill={tokens.color_brand_gray}
            d="M325.93 182.41c4.61.19 8.59-3.07 8.67-7.82h-3.65c.04 5.04-7.03 6.07-9.64 2.62-1.03-1.34-1.55-3.34-1.55-6.01s.52-4.67 1.55-5.98c2.59-3.39 9.67-2.43 9.64 2.59h3.65c-.14-7.79-10.02-9.96-15.29-5.52-3.4 2.93-3.8 8.67-2.86 12.84.9 4.57 5.01 7.44 9.48 7.28zm23.31 0c9.08.19 11.57-9.35 9.01-16.63-3.11-8.43-16.95-7.36-18.51 1.57-1.6 7.19 1.05 15.2 9.5 15.06zm0-3.19c-4.69-.07-6.13-3.35-6.16-8.01.03-4.67 1.48-7.89 6.16-7.96 4.68.07 6.13 3.29 6.16 7.96-.03 4.65-1.48 7.94-6.16 8.01zm19.86 2.7v-16.51c1.81-2.28 6.64-3.21 8.42-.5.78 1.34.82 2.97.85 4.68v12.34h3.7c-.09-2.24.24-14.18-.25-16.12 1.79-2.46 6.79-3.82 8.7-.87.75 1.34.78 2.97.81 4.66v12.34h3.7v-13.17c-.02-2.91-.46-5.22-2.18-7.05-3.34-2.98-9.34-1.8-11.77 1.74-2.22-4.85-10.04-4.28-12.62-.15v-2.75h-3.06v21.38h3.7zm36.97 9.73v-11.94c2.97 3.52 9.09 3.62 12.22.12 2.06-2.31 2.76-5.27 2.76-8.72.04-4.5-1.47-8.85-5.62-10.47-3.47-1.33-7.76-.4-10.01 2.56v-2.65h-3.06v31.11h3.71zm5.17-12.43c-2.03.02-3.86-.75-5.18-2.11v-11.75c2.3-2.59 7.66-3.03 9.71-.02 2.81 4.07 2.21 14.2-4.53 13.88zm31.8 3.19c1.01.01 2.19-.24 2.96-.69v-2.75c-1.02.61-3.19.95-3.06-.84v-9.78c.14-5.21-2.22-8.49-7.74-8.31-4.66-.18-8.92 2.42-8.72 7.67h3.6c-.23-4.39 3.57-5.37 7.06-4.3 2.32 1 2.05 3.79 2.11 6.02-3.21.38-7.73.22-10.6 1.9-2.61 1.34-3.6 4.66-2.56 7.38 2.17 5.3 10.71 4.46 13.75.39-.2 2.05 1.05 3.4 3.2 3.31zm-9.71-2.9c-1.28 0-2.25-.28-2.91-.85-1.51-1.22-1.23-4.11.41-5.07 1.64-1.29 6.2-1.39 8.42-1.7v5.36c-1.76 1.44-3.55 2.28-5.92 2.26zm21.04 2.41v-16.51c2.02-2.27 7.18-3.22 9.14-.5.83 1.33.88 2.96.91 4.68v12.34h3.7v-13.17c-.02-2.93-.49-5.25-2.29-7.05-3.35-2.83-9.68-2.02-12.1 1.6v-2.75h-3.06v21.38h3.7zm21.52 10.22c4.15.19 6.27-3.23 7.44-6.73l9.12-24.87h-3.8l-5.91 17.45-5.96-17.45h-3.99l7.94 21.87c-1.54 3.95-1.96 7.93-7.29 6.19v3.15c.65.27 1.53.4 2.45.39z"
          />
        </svg>
      </Box>
      <Box mx="300" height="70%" width="1px" bg="gray.500" />
      <Box as="a" display="block" height="80%" href="https://www.sparkpost.com/docs">
        <svg
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 136"
          fill={tokens.color_brand_orange}
        >
          <path d="M5,80.52h9V96.6c1.89-2.68,4.26-5.11,8.39-5.11,6.08,0,9.61,4.36,9.61,11.28v22.75H24v-20c0-3.9-1.82-5.88-4.94-5.88s-5.06,2-5.06,5.88v20H5Z"></path>
          <path d="M38,108.61v-.56c0-9.84,6.13-17,14.48-17,9.47,0,14.11,7.73,14.11,17.63,0,.49,0,1.55-.06,2.85H46.75c.74,4.39,3.46,6.68,7.18,6.68,2.72,0,4.83-1.24,6.93-3.28l4.52,5.32a15.32,15.32,0,0,1-11.82,5.32C44.77,125.56,38,118.94,38,108.61Zm20-3.09c-.37-4.58-2.35-7.42-5.63-7.42s-5.32,2.72-5.82,7.42Z"></path>
          <path d="M72,80.52h9v45H72Z"></path>
          <path d="M89,91.52h9V96.1c1.87-2.78,4.45-5.2,8.73-5.2,6.38,0,12.27,5.38,12.27,16.71v1c0,11.32-5.84,16.71-12.27,16.71-4.33,0-6.92-2.41-8.73-4.89v14.11H89Zm21,17.07V108c0-5.66-2.8-9.27-6.47-9.27S97,102.3,97,108v.62c0,5.66,2.86,9.27,6.53,9.27S110,114.25,110,108.58Z"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Logo;

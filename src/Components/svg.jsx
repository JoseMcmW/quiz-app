export const unselectedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <circle cx="10" cy="10" r="9" stroke="#EFEFEF" strokeWidth="2" />
  </svg>
);

export const correctIcon = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1 3.9653L4.50524 7.4727L11.0337 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="#3EB8D4"
        stroke="#3EB8D4"
        strokeWidth="2"
      />
      <path
        d="M1 3.9653L4.50524 7.4727L11.0337 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4, 5)"
      />
    </svg>
  </div>
);

export const incorrectIcon = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="#FF5341"
        stroke="#FF5341"
        strokeWidth="2"
      />
      <path
        d="M1 1L9 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5, 5)"
      />
      <path
        d="M1 9L9 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5, 5)"
      />
    </svg>
  </div>
);

export const shadow = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="117"
      height="52"
      viewBox="0 0 117 52"
      fill="none"
    >
      <g filter="url(#filter0_f_0_19)">
        <ellipse
          cx="58.5"
          cy="26"
          rx="36.5"
          ry="4"
          fill="#1C1C1C"
          fillOpacity="0.767068"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_0_19"
          x="0.253746"
          y="0.253746"
          width="116.493"
          height="51.4925"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10.8731"
            result="effect1_foregroundBlur_0_19"
          />
        </filter>
      </defs>
    </svg>
  </div>
);

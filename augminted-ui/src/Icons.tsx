import { CSSProperties } from "react";

export interface IconProps {
  style?: CSSProperties;
}

export function AugmintedLogo(props: IconProps) {
  const { style } = props;
  const st0: CSSProperties = {
    fill: "none",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
  };
  const st1: CSSProperties = { fill: "#010101" };
  return (
    <svg
      enableBackground="new 0 0 82 82"
      version="1.1"
      viewBox="0 0 82 82"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <circle cx="41" cy="41" r="39.87" style={st0} />
      <polygon
        style={st1}
        points="45.43 38.79 44.31 40.52 40.76 46.04 35.72 53.96 35.69 53.91 35.34 54.45 33.11 53.88 23.49 51.41 22.09 51.05 31.17 66.96 40.17 66.96 58.21 38.79"
      />
      <polygon
        style={st1}
        points="24.64 35.59 25.34 35.59 25.34 35.58 56.86 35.58 70.15 28.09 64.99 19.07 53.89 25.38 16.38 25.38 11.85 33.16 20.81 48.81 21.21 47.42 23.97 37.9"
      />
      <polygon
        style={st1}
        points="33.91 50.78 33.96 50.69 41.63 38.79 27.04 38.79 24.28 48.31"
      />
    </svg>
  );
}

export function EthLogo(props: IconProps) {
  const { style } = props;
  const st0: CSSProperties = {
    fill: "none",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
  };
  return (
    <svg
      enableBackground="new 0 0 82 82"
      version="1.1"
      viewBox="0 0 82 82"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <circle style={st0} cx="41" cy="41" r="39.87" />
      <polygon style={st0} points="57.51 41.37 41 51.08 24.49 41.37 41 13.71" />
      <line style={st0} x1="41" x2="41" y1="51.08" y2="13.71" />
      <polyline style={st0} points="24.49 41.37 41 33.62 57.51 41.37" />
      <polygon style={st0} points="24.49 44.88 41 54.59 57.51 44.88 41 68.29" />
      <line style={st0} x1="41" x2="41" y1="54.59" y2="68.29" />
    </svg>
  );
}

export function WristbandTape() {
  const st0: CSSProperties = {
    fill: "none",
    stroke: "#231F20",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    strokeLinecap: "round",
  };
  return (
    <svg
      enableBackground="new 0 0 175.19 127.28"
      version="1.1"
      viewBox="0 0 175.19 127.28"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%" }}
    >
      <path
        style={st0}
        d="M50.75,114.82L-6,93.44c-1.96-0.74-1.96-5.4,0-6.13l55.31-20.83c1.96-0.74,1.96-5.4,0-6.13L-6,39.51     c-1.96-0.74-1.96-5.4,0-6.13l56.75-21.38"
      />
      <path
        style={st0}
        d="m78.53 114.82l-56.75-21.38c-1.96-0.74-1.96-5.4 0-6.13l55.31-20.83c1.96-0.74 1.96-5.4 0-6.13l-55.31-20.84c-1.96-0.74-1.96-5.4 0-6.13l56.75-21.38"
      />
      <path
        style={st0}
        d="m106.3 114.82l-56.75-21.38c-1.96-0.74-1.96-5.4 0-6.13l55.31-20.83c1.96-0.74 1.96-5.4 0-6.13l-55.31-20.84c-1.96-0.74-1.96-5.4 0-6.13l56.75-21.38"
      />
      <path
        style={st0}
        d="m134.08 114.82l-56.75-21.38c-1.96-0.74-1.96-5.4 0-6.13l55.31-20.83c1.96-0.74 1.96-5.4 0-6.13l-55.31-20.84c-1.96-0.74-1.96-5.4 0-6.13l56.75-21.38"
      />
      <path
        style={st0}
        d="m162.12 114.82l-56.75-21.38c-1.96-0.74-1.96-5.4 0-6.13l55.31-20.83c1.96-0.74 1.96-5.4 0-6.13l-55.31-20.83c-1.96-0.74-1.96-5.4 0-6.13l56.75-21.38"
      />
    </svg>
  );
}

export function HeaderDecoration(props: IconProps & { className?: string }) {
  const { style, className } = props;
  const st0: CSSProperties = {
    fill: "none",
    stroke: "#231F20",
    strokeMiterlimit: 10,
  };
  return (
    <svg
      enableBackground="new 0 0 222 55"
      version="1.1"
      viewBox="0 0 222 55"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <polygon style={st0} points="95.65 2.1 61.72 2.1 43.54 52.9 77.31 52.9" />
      <polygon style={st0} points="55.49 2.1 35.6 2.1 17.42 52.9 37.16 52.9" />
      <polygon style={st0} points="11.03 52.9 29.37 2.1 20.17 2.1 1.99 52.9" />
      <polygon
        style={st0}
        points="135.8 2.1 101.88 2.1 83.7 52.9 117.47 52.9"
      />
      <polygon style={st0} points="220.22 8.05 204.17 52.9 220.22 52.9" />
      <polygon
        style={st0}
        points="216.12 2.1 182.19 2.1 164.01 52.9 197.78 52.9"
      />
      <polygon
        style={st0}
        points="175.96 2.1 142.04 2.1 123.86 52.9 157.63 52.9"
      />
    </svg>
  );
}

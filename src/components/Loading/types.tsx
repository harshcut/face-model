interface Props {
  primary?: string;
  secondary?: string;
  speed?: number;
}

export const Circular = ({ primary, secondary, speed = 1 }: Props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" width="50" height="50">
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke={secondary}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M15 8a7.002 7.002 0 00-7-7"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 8 8"
          to="360 8 8"
          dur={`${speed}s`}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export const Linear = ({ primary, secondary, speed = 2 }: Props) => {
  return (
    <div>
      <div />
      <style jsx>{`
        div {
          background: ${secondary};
          border-radius: 2px;
          height: 4px;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        div > div {
          animation: shift ${speed}s infinite;
          background: ${primary};
          border-radius: 2px;
          height: 4px;
          position: absolute;
        }
        @keyframes shift {
          from {
            left: -80%;
            width: 80%;
          }
          to {
            left: 110%;
            width: 10%;
          }
        }
      `}</style>
    </div>
  );
};

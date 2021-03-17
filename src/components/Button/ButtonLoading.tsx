interface Props {
  className?: string;
}

const ButtonLoading = ({ className }: Props) => {
  return (
    <div className={className}>
      <span>
        <i />
        <i />
        <i />
      </span>
      <style jsx>{`
        div {
          align-items: center;
          background: #0256a6;
          border-radius: 0.25rem;
          cursor: default;
          display: flex;
          justify-content: center;
          min-height: 50px;
          outline: none;
          width: 100%;
        }
        span {
          align-items: center;
          display: flex;
          gap: 4px;
          justify-content: center;
          user-select: none;
        }
        i {
          animation: blink 1.4s infinite both;
          background-color: #fff;
          border-radius: 50%;
          display: inline-block;
          height: 5px;
          width: 5px;
        }
        i:nth-child(2) {
          animation-delay: 0.2s;
        }
        i:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% {
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonLoading;

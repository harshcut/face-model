import React from "react";
import ButtonLoading from "./ButtonLoading";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

const Button = ({ children, className, onClick, loading }: Props) => {
  return loading ? (
    <ButtonLoading className={className} />
  ) : (
    <button onClick={onClick} className={className}>
      {children}
      <style jsx>{`
        button {
          background: #037bee;
          border-radius: 0.25rem;
          color: #f5f5f5;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          min-height: 50px;
          line-height: 50px;
          outline: none;
          padding: 0 16px;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          width: 100%;
        }
        button:hover,
        button:focus {
          background: #0256a6;
          outline: none;
        }
      `}</style>
    </button>
  );
};

export default Button;

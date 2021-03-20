import React from "react";
import { Emergency, Informative } from "./icons";

interface Props {
  children?: React.ReactNode;
  className?: string;
  type?: "neutral" | "warning" | "danger" | string;
}

const Alert = ({ children, className, type }: Props) => {
  let palette: {
    background: string;
    foreground: string;
  };

  switch (type) {
    case "neutral":
      palette = {
        background: "#2a3f2d",
        foreground: "#4dbb5f",
      };
      break;
    case "warning":
      palette = {
        background: "#524C2d",
        foreground: "#ffe564",
      };
      break;
    case "danger":
      palette = {
        background: "#4a2421",
        foreground: "#ef341e",
      };
      break;
    default:
      type = "neutral";
      palette = {
        background: "#2a3f2d",
        foreground: "#4dbb5f",
      };
  }

  return (
    <div className={`${className} -alert--container`}>
      <div className="-alert--icon">
        {type === "neutral" ? (
          <Informative foreground={palette.foreground} />
        ) : (
          <Emergency foreground={palette.foreground} />
        )}
      </div>
      {children}
      <style jsx>{`
        .-alert--container {
          background: ${palette.background};
          border-radius: 0.25rem;
          color: #f5f5f5;
          display: flex;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          padding: 14px 16px;
          width: 100%;
        }
        .-alert--icon {
          margin-right: 14px;
        }
      `}</style>
    </div>
  );
};

export default Alert;

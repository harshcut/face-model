import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  defaultChecked?: boolean;
  name?: string;
}

const CheckBox = (
  { children, className, defaultChecked, name }: Props,
  ref: React.Ref<HTMLInputElement>
) => {
  return (
    <label className={className}>
      {children}
      <input
        defaultChecked={defaultChecked}
        name={name}
        ref={ref}
        type="checkbox"
      />
      <span />
      <style jsx>{`
        label {
          color: inherit;
          cursor: pointer;
          display: block;
          padding-left: 35px;
          position: relative;
          user-select: none;
          width: max-content;
          -webkit-tap-highlight-color: transparent;
        }
        input {
          cursor: pointer;
          height: 0;
          opacity: 0;
          position: absolute;
          width: 0;
        }
        span {
          background-color: #454545;
          border-radius: 2px;
          position: absolute;
          height: 20px;
          width: 20px;
          left: 0;
          top: 0;
        }
        span:after {
          content: "";
          position: absolute;
          display: none;
        }
        input:checked ~ span:after {
          display: block;
        }
        span:after {
          left: 7px;
          top: 2px;
          width: 6px;
          height: 12px;
          border: solid #fff;
          border-width: 0 1px 1px 0;
          transform: rotate(45deg);
        }
      `}</style>
    </label>
  );
};

export default React.forwardRef(CheckBox);

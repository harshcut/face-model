import React from "react";

interface Props {
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  autoComplete?: boolean;
  autoCapitalize?: boolean;
  spellCheck?: boolean;
}

const Input = (
  {
    className,
    placeholder,
    type,
    name,
    autoComplete,
    autoCapitalize,
    spellCheck,
  }: Props,
  ref: React.Ref<HTMLInputElement>
) => {
  const [isOccupied, setOccupied] = React.useState(false);

  const changeTheme = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === "") {
      setOccupied(false);
    } else {
      setOccupied(true);
    }
  };

  return (
    <React.Fragment>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete={autoComplete ? "on" : "off"}
        autoCapitalize={autoCapitalize ? "words" : "off"}
        spellCheck={spellCheck ? "true" : "false"}
        ref={ref}
        onChange={changeTheme}
      />
      <style jsx>{`
        input {
          background-color: ${isOccupied ? "#484848" : "#2b2b2b"};
          border-radius: 0.25rem;
          caret-color: #fff;
          color: #f5f5f5;
          display: block;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          line-height: 50px;
          outline: none;
          padding: 0 14px;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
          width: 100%;
        }
        input::placeholder {
          color: #a9a9a9;
        }
      `}</style>
    </React.Fragment>
  );
};

export default React.forwardRef(Input);

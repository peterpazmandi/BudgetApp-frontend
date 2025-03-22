import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonInvert = (props: ButtonProps) => {
  return (
    <button className={`cursor-pointer color-primary color-primary-invert-border color-primary-invert-hover text-white font-bold pt-4 pb-4 pl-20 pr-20 rounded-full`}>
      {props.children}
    </button>
  );
};

export default ButtonInvert;

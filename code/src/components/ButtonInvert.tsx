import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonInvert = (props: ButtonProps) => {
  return (
    <button
      className={`${props.className} cursor-pointer color-primary color-primary-invert-border color-primary-invert-hover text-white font-bold
                                          pt-4 pb-4 pl-10 pr-10
                                          md:pl-20 md:pr-20
                                          rounded-full`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonInvert;

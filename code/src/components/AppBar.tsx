import { ReactNode } from "react";
import AppLogo from "../assets/png/app_logo.png";

type AppBarProps = {
  centerContent?: ReactNode;
  rightContent?: ReactNode;
  transparentAppbar?: boolean;
};

const AppBar = ({
  centerContent,
  rightContent,
  transparentAppbar,
}: AppBarProps) => {
  const transparentBackground = (): string => {
    return transparentAppbar
      ? "bg-opacity-100 dark:bg-gray-800 text-black"
      : "bg-blue-600 text-white shadow-md";
  };

  const className = `${transparentBackground()} p-4`;

  return (
    <header className={className}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <img
            src={AppLogo}
            alt="Logo"
            width={100}
            className="dark:brightness-0 dark:invert"
          />
        </h1>
        <div className="flex-1 flex justify-center">{centerContent}</div>
        <div>{rightContent}</div>
      </div>
    </header>
  );
};

export default AppBar;

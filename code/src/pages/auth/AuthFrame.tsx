import { JSX } from "react";
import AppLogo from "../../assets/png/app_logo.png";
import DarkModeToggler from "../../components/DarkModeToggler";

interface AuthFrameProps {
  leftContent: JSX.Element;
  rightContent: JSX.Element;
}

const AuthFrame = (props: AuthFrameProps) => {
  return (
    <div
      className="grid items-center h-screen
                    ps-6 pe-6 
                    lg:ps-20 lg:pe-20 
                    xl:ps-60 xl:pe-60"
    >
      <div className="justify-center h-[80%] grid grid-cols-5 shadow-xl rounded-lg color-background">
        <div
          className="hidden
                        sm:block 
                        md:block 
                        lg:block 
                        col-span-2 p-6 color-primary rounded-tl-lg rounded-bl-lg"
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src={AppLogo}
                alt="Logo"
                width={40}
                className="brightness-0 invert"
              />
              <span className="hidden md:block ps-4 font-bold invert">
                BudgetApp
              </span>
            </div>

            <DarkModeToggler />
          </div>
          <div className="flex items-center justify-center h-[100%]">
            <div className="place-items-center">
              <div className="text-center">{props.leftContent}</div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center
                        rounded-lg
                        col-span-5
                        sm:col-span-3 sm:rounded-tl-none sm:rounded-bl-none
                        color-container"
        >
          <div className="place-items-center">
            <div className="text-center">{props.rightContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;

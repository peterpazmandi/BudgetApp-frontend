import { JSX } from "react";
import AppLogo from "../../assets/png/app_logo.png";
import DarkModeToggler from "../../components/DarkModeToggler";

interface AuthFrameProps {
  leftContent: JSX.Element;
}

const AuthFrame = (props: AuthFrameProps) => {
  return (
    <div className="grid items-center h-screen ps-80 pe-80">
      <div className="justify-center h-[80%] grid grid-cols-5 shadow-xl rounded-lg color-background">
        <div className="col-span-2 p-6 color-primary rounded-tl-lg rounded-bl-lg">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                src={AppLogo}
                alt="Logo"
                width={40}
                className="brightness-0 invert"
              />
              <span className="ps-4 font-bold invert">BudgetApp</span>
            </div>

            <DarkModeToggler />
          </div>
          <div className="grid place-items-center h-[80%]">
            {props.leftContent}
          </div>
        </div>

        <div className="col-span-3 p-20 color-container rounded-tr-lg rounded-br-lg">
          t
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;

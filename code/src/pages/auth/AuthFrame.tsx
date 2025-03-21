import AppLogo from "../../assets/png/app_logo.png";
import DarkModeToggler from "../../components/DarkModeToggler";

const AuthFrame = () => {
  return (
    <div className="h-screen">
      <div className="items-center justify-center h-screen ps-80 pe-80 grid grid-cols-5 drop-shadow-2xl">
        <div className="container h-[80%] col-span-2 p-6 bg-emerald-500 dark:bg-slate-800 rounded-tl-lg rounded-bl-lg">
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
          <div className="p-14">t</div>
        </div>
        <div className="container h-[80%] col-span-3 p-20 bg-slate-200 dark:bg-slate-700 rounded-tr-lg rounded-br-lg">
          t
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;

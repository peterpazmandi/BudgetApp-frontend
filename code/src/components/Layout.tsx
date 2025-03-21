import { ReactNode } from "react";
import AppBar from "./AppBar";

interface LayoutProps {
  appbarCenterContent?: ReactNode;
  appbarRightContent?: ReactNode;
  children: ReactNode;
  transparentAppbar?: boolean;
  hideAppBar?: boolean;
}

const Layout = ({
  appbarCenterContent,
  appbarRightContent,
  children,
  transparentAppbar,
  hideAppBar
}: LayoutProps) => {
  return (
    <div className="bg-white dark:bg-slate-900">
      {!hideAppBar && <AppBar
        centerContent={appbarCenterContent}
        rightContent={appbarRightContent}
        transparentAppbar={transparentAppbar}
      />}
      {children}
    </div>
  );
};

export default Layout;

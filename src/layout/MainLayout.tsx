import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

interface IMainLayout {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

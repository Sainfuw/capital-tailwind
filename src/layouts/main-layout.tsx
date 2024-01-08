import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function MainLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto] w-[1400px] min-h-screen mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
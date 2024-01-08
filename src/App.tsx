import { HomeBanner } from "./components/home-banner"
import { PreFooter } from "./components/pre-footer"
import { MainLayout } from "./layouts/main-layout"

export function App() {
  return (
    <MainLayout>
      <HomeBanner />
      <main>
      </main>
      <PreFooter />
    </MainLayout>
  )
}
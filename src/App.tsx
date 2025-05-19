import { Layout } from "./components/Layout"
import { AboutUs } from "./components/sections/AboutUs"
import Brands from "./components/sections/Brands"
import { Cta } from "./components/sections/Cta"
import Hero from "./components/sections/Hero"
import { Pricing } from "./components/sections/Pricing"
import { Services } from "./components/sections/Services"


function App() {


  return (
    <>
      <Layout title="EgdeAi">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <Pricing />
        <Cta />
      </Layout>

    </>
  )
}

export default App

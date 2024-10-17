
import Featuerssection from "./Componants/Featuerssection"
import Landingpage from "./Componants/landingpage"
import Navbar from "./Componants/Navbar"
import Workflow from "./Componants/Workflow"
import Pricing from "./Componants/Pricing"
import Testimonials from "./Componants/Testimonials"
import Footer from "./Componants/Footer"
const App = () => {
  return (
    <div className="h-screen	">
  <Navbar/>
  <div className="mx-auto max-w-7xl pt-20">
  <Landingpage/>
  <Featuerssection/>
  <Workflow />
  <Pricing/>
  <Testimonials/>
  <Footer/>
  </div>
    </div>
      

  )
}

export default App


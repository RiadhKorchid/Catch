import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/footer"
import HowItWork from "./components/HowItWork"
import About from "./components/About"
import Downloads from "./components/Downloads"
import ImageList from "./components/ImageList"

function App() {

  return (<>
        <Navbar/>
        <Home/>
        <ImageList/>
        <Downloads/>
        <HowItWork/>
        <About/>
        <Footer/>

  </>
  )
}

export default App

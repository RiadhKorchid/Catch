import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/footer"
import HowItWork from "./components/HowItWork"
import WhyChooseUs from "./components/About"
import Downloads from "./components/Downloads"
import ImageList from "./components/ImageList"
import Contacts from "./components/Contacts"
 function App() {

  return (<>
        <Navbar/>
        <Home/>
        <ImageList/>
        <Downloads/>
        <HowItWork/>
       <WhyChooseUs/>
       <Contacts/>
        <Footer/>

  </>
  )
}

export default App;

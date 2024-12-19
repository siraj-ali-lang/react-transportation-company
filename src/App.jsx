import About from "./components/about/About"
import Advertise from "./components/advertisement/Advertise"
import Navbar from "./components/navbar/Navbar"
import './app.scss'
import Products from "./components/products/Products"
import Footer from "./components/footer/Footer"
import Slider from "./components/slider/Slider"
import Map from './components/map-info/Map'
import Info from "./components/info/Info"



const App = ()=> {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section id="Home">
      {/*<Background/>*/}
      <Slider/>
    </section>
    <section id="About">
      <About/>
    </section>
    <section className="alzab" id="Services">
      <Advertise/>
    </section>
    <section>
      <Info/>
    </section>
    <section>
      <Products/>
    </section>
    <section>
      <Footer/>
    </section>
    
    <section id="Join">
      <Map/>
    </section>
  </div>
}

export default App
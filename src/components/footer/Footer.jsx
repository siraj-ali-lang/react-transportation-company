import './footer.scss'
import img1 from '../images/brand/br-1.png'
import img2 from '../images/brand/br-2.png'
import img3 from '../images/brand/br-3.png'
import img4 from '../images/brand/br-4.png'
import img5 from '../images/brand/br-5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Footer = ()=> {

    useEffect(()=> {
                AOS.init({duration:1000});
            }, [])
    

    return <div className='footer-container'>
        <h1 className='title'>BRANDS</h1>
            <div data-aos='fade-down' data-aos-delay='300' className="content">
            <div data-aos='fade-down' data-aos-delay='200' className="img">
                <img src={img4} alt="" />
            </div>
            <div data-aos='fade-down' data-aos-delay='400' className="img">
                <img src={img1} alt="" />
            </div>
            <div data-aos='fade-right' data-aos-delay='1000' className="img">
                <img src={img2} alt="" />
            </div>
            
            <div data-aos='fade-left' data-aos-delay='600' className="img">
                <img src={img5} alt="" />
            </div>
            <div data-aos='fade-up' data-aos-delay='800' className="img">
                <img src={img3} alt="" />
            </div>
            
        </div>
    </div>
}
export default Footer
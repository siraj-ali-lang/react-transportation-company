import './products.scss'
//import img1 from '../images/product/p-1.jpg'
import img1 from '../images/transport-img/location.png'


import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Products = ()=> {
    useEffect(()=> {
            AOS.init({duration:1000});
        }, [])

    return <div className='products-container'>
        <h1 className='title'>GET OUR BRANSHES</h1>
        <div className="row1">
            <div data-aos='fade-right' data-aos-delay='600' className="box1 box">
                <h1 data-aos='fade-left' data-aos-delay='500'>فرع طرابلس</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <button><a href="tel:+218912533246">إتصل بنا</a></button>
            </div>
            <div data-aos='fade-down' data-aos-delay='600' className="box2 box">
            <h1 data-aos='fade-up' data-aos-delay='500'>فرع بنغازي</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <button><a href="tel:+218912533246">إتصل بنا</a></button>
            </div>
            <div data-aos='fade-down' data-aos-delay='600' className="box3 box">
            <h1 data-aos='fade-up' data-aos-delay='500'>فرع مصراته</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <button><a href="tel:+218912533246">إتصل بنا</a></button>
            </div>
            <div data-aos='fade-left' data-aos-delay='600' className="box4 box">
            <h1 data-aos='fade-right' data-aos-delay='500'>فرع الزاوية</h1>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <button><a href="tel:+218912533246">إتصل بنا</a></button>
            </div>
        </div>
        
    </div>
}

export default Products
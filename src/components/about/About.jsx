import './about.scss'
import img1 from '../images/transport-img/trans-3d.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const About = ()=> {

    useEffect(()=> {
        AOS.init({duration:1000});
    }, [])

    return <div className='about-container'>
        <h1 className='title'>هل تريد التعرف علينا!</h1>
        <div className="content">
        <div className="text">
            <h1 className='styled-h1'>Head Line</h1>
            <p>نحن في [شركة دافيت] نُقدّم خدمات شحن متكاملة تربط بين الصين ودبي، مع التركيز على تقديم أعلى مستويات الجودة والموثوقية لعملائنا.</p>
            <h1>إعرف أكثر!</h1>
            <p>تأسست شركتنا بهدف تسهيل عمليات النقل البحري والجوي بين أهم المراكز التجارية في العالم، مستفيدين من خبراتنا الواسعة وفريق عمل متخصص لضمان وصول شحناتكم بأمان وفي الوقت المحدد.</p>
        </div>
        <div data-aos='flip-left' data-aos-delay='650' className="image">
            <img src={img1} alt=""/>
        </div>
    </div>
    </div>
}
export default About
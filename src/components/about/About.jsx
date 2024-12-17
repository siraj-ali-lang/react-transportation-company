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
            <p>نحن شركة نقل 'إسم' نوفر لكم خدمات نقل البضائع بمختلف الكميات وبأسعار مرضيه, ومقر شركتنا في مدينة'إسم المدينة' شارع 'إسم الشارع' للمزيد من المعلومات أسفل</p>
            <h1>AI Technology</h1>
            <p>قم بالتصفح للأسفل للإطلاع على تفاصيل أكثر حور خدماتنا ولمعرفة كيفية التصاواصل على أرقام الهواتف المدرجة بالأسفل أو عبر البريد الإلكتروني</p>
        </div>
        <div data-aos='flip-left' data-aos-delay='650' className="image">
            <img src={img1} alt=""/>
        </div>
    </div>
    </div>
}
export default About
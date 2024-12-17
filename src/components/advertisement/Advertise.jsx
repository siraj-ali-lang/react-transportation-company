import './advertise.scss'
import img1 from '../images/transport-img/small-plane.jpg'
import img2 from '../images/transport-img/small-ship.jpg'
import img3 from '../images/transport-img/small-truck.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Advertise = ()=> {
    useEffect(()=> {
        AOS.init({duration:1000});
    }, [])
    //data-aos='fade-left' data-aos-delay='1100'

    return <div className='container-adv'>
        <h1 className='title'>خدمات شركة النقل</h1>
        <div className="row1">
            <div className="box1">
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="text">
                    <h1>نقل جوي</h1>
                    <p>أصبح نقل البضائع سهلا وأكثر أماناَ وأقل تكلفة حيث نوفر لكم نقل البضائع من الداخل إلى الخارج ومن الخارج إلى الداخل بأسعار منافسة</p>
                </div>
            </div>
            <div className="box2">
            <div className="img">
                    <img src={img2} alt="" />
                </div>
                <div className="text">
                    <h1>نقل بحري</h1>
                    <p>يمكن أن يكون النقل البحري الخيار الأفضل من ناحية الكمية والأمان بالإضافة إلى الأسعار والعديد من المميزات خاصة في نقل الشحنات الضخمه الغير مستعجلة.</p>
                </div>
            </div>
        </div>

        <div className="row2">
            <div className="box">
                <div className="img">
                    <img src={img3} alt="" />
                </div>
                <div className="text">
                    <h1>نقل بري</h1>
                    <p>ننقل البضائع عادة عبر الطرق البرية عندما يكون مقر ناقل البضاعه قريب من المنقول له حيث يتم التسليم في المدة الزمنية المرغوبه.</p>
                </div>
            </div>
        </div>
    </div>
}
export default Advertise
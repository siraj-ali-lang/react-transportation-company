import React from 'react'
import './info.scss'
import { useState } from 'react'
import { usInfoData } from './info-data'
import { visioninfoData } from './info-data'
import { misionInfoData } from './info-data'
import about from '../images/transport-img/about-us.jpg'
import vision from '../images/transport-img/vision.jpg'
import mision from '../images/transport-img/mision.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


function Info() {
    useEffect(()=> {
                AOS.init({duration:1000});
            }, []);

 const [english, setEnglish] = useState(false)
 const [english2, setEnglish2] = useState(false)
 const [english3, setEnglish3] = useState(false)
  return (
    <div className='info-container'>
        <div className="content">
            <div data-aos='fade-down' data-aos-delay='400' className="box1 box mision">
                <div className="img">
                    <img src={mision} alt="" />
                </div>
                <div className="button">
                <button className={english ? 'eng' : 'ar'} onClick={()=>setEnglish((prev)=> !prev)}>{english ? 'اللغة العربية' : 'English lang'}</button>
                </div>
                <div className={english ? 'eng-text text' : 'ar-text text'}>
                <h1>{english ? "Our Mision" : "مهمتنا"}</h1>
                {
                    misionInfoData.map((item) => (<p>{english ? item.misionInfoEng : item.misionInfoAr}</p>))
                }
                </div>

            </div>
            <div data-aos='fade-down' data-aos-delay='600' className="box2 box vision">
                <div className="img">
                    <img src={vision} alt="" />
                </div>
                <div className="button">
                <button className={english2 ? 'eng' : 'ar'} onClick={()=>setEnglish2((prev)=> !prev)}>{english2 ? 'اللغة العربية' : 'English lang'}</button>
                </div>
                <div className={english2 ? 'eng-text text' : 'ar-text text'}>
                <h1>{english2 ? "Our Vision" : "رؤيتنا"}</h1>
                {
                    visioninfoData.map((item) => (<p>{english2 ? item.visionInfoEng : item.visionInfoAr}</p>))
                }
                </div>
            </div>
            <div data-aos='fade-down' data-aos-delay='800' className="box3 box value">
            <div className="img">
                    <img src={about} alt="" />
                </div>
                <div className="button">
                <button className={english3 ? 'eng' : 'ar'} onClick={()=>setEnglish3((prev)=> !prev)}>{english3 ? 'اللغة العربية' : 'English lang'}</button>
                </div>
                <div className={english3 ? 'eng-text text' : 'ar-text text'}>
                <h1>{english3 ? "Our Values" : "قيمنا"}</h1>
                {
                    english3 ? <ul>
                        <li>*<strong>Quality</strong>*: We are commited to delivering the highest standards in all aspects of our operations.</li>
                        <li>*<strong>Transparency</strong>*: We build our customer relationships on honesty and clarity.</li>
                        <li>*<strong>Safety</strong>*: The safety of your shipments is our priority.</li>
                        <p>With [DEFEAT COMPANY], you can rest assured that your shipments are in safe hands, as we continuously strive to exceed your expectations.</p>
                    </ul>
                    : <ul>
                        <li>الجودة : نلتزم بتقديم أعلى مستويات الجودة في جميع جوانب عملنا.</li>
                        <li>الشفافية : نبني علاقاتنا مع العملاء على الصدق والوضوح.</li>
                        <li>الأمان : نضع سلامت شحناتكم كأولوية قصوي.</li>
                        <p>مع شركة دافيت يمكنكم الإطمئنان بأن شحناتكم في أيد أمينة  حيث نسعى دائماَ لتجاوز توقعاتكم</p>
                    </ul>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info
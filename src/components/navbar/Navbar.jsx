import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'
const Navbar = ()=> {

    const links = ['Home','About','Services','Join']

    return <div className="container">
        <Sidebar/>
        <div className="logo">
            <motion.h1 initial={{opacity:0.5, scale:0.7}} animate={{opacity:1,scale:1,x:30}} transition={{duration:1}}>Rio Dev</motion.h1>
        </div>
        <div className="links">
            <ul>
                {
                    links.map((link) => (
                        <li key={link}><a href={`#${link}`}>{link}</a></li>
                    ))
                }
            </ul>
        </div>
    </div>
}
export default Navbar
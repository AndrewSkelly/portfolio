import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { Settings,AccountCircle } from '@mui/icons-material';

const Nav = () => {
    return (
            <ul className={navStyles.container}>
                <li className={navStyles.logoFont}><Link href=''>K</Link></li>
                <li className={navStyles.link}><Link href='/'>Home</Link></li>
                <li className={navStyles.link}><Link href='/about'>About</Link></li>
                <li className={navStyles.link}><Link href='/contact'>Contact</Link></li>
                <li className={navStyles.linkIcon}><Link href='/about'><Settings></Settings></Link></li>
                <li className={navStyles.linkIcon}><Link href='/contact'><AccountCircle></AccountCircle></Link></li>
            </ul>
    )
}

export default Nav

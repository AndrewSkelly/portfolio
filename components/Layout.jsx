// import Image from 'next/image'
import Image from 'next/image'
import Backer from '../public/images/backer.jpg'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <Image src={Backer} alt="Picture of the author" />
            {children}
        </>
    )
}

export default Layout

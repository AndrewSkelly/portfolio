import Aboutcontent from '../styles/Aboutbox.module.css'

const Aboutbox = () => {
    return (
        <div className={Aboutcontent.container}>
            <h1 className={Aboutcontent.primarytitle}>About</h1>
            <h4 className={Aboutcontent.secondarytitle}>Andrew Skelly</h4>
            <p className={Aboutcontent.body}>I am a student studying computer science in Tallaght University Dublin</p>
        </div>
    )
}

export default Aboutbox

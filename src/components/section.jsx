import section from './section.module.css'
import notebook from '/Users/macbook/Desktop/learning/src/components/img/notebok.png'
const Section=()=>{
    return (
        <div className={section.urta_qismi}>
            <div className={section.yozuv_qismi}>
                <h1>Hello,<br />I am <span>Krutik Raut.</span><br /><h3>Web Designer/Developer</h3></h1>
            </div>
            <div className={section.contact}> <button type='submit'>Contact</button></div>
            <div className={section.projects}> <button type='submit'>Projects</button></div>

            <div className={section.rasm_joyi}>
                <img src={notebook} alt="" />
            </div>
        </div>
    )

};

export default Section
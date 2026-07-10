import telefon_qismi from "./telefon_qismi.module.css";
import phone from "./img/phone.png"; 

const Telefon_qismi = () => {
  return (
    <div className={telefon_qismi.body}>

  <div className={telefon_qismi.left}>
    <div className={telefon_qismi.huynacha}></div>

    <h1>A Bit About Me...</h1>

    <p>
      Hello, My name is Krutik Raut AKA reboot13. <br />
      I am a CSE Undergraduate at Parul University. <br />
      I'm currently learning UI/UX development.
    </p>

    <h2>@reboot13-git</h2>
  </div>

  <div className={telefon_qismi.right}>
    <img src={phone} alt="Phone" />
  </div>

</div>
    
  )
}


export default Telefon_qismi
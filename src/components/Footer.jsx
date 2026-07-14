import footer_qismi from './footer.module.css'
import {
  FaGooglePlay,
  FaApple,
  FaChevronUp
} from "react-icons/fa";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer=()=>{
    return(
        <div className={footer_qismi.asosiy_class}>
            <h1>🗑️BirMakon</h1>
            <div className={footer_qismi.harid_qismi}>
                <h1>Покупателям</h1>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                </div>
            <div className={footer_qismi.company_qismi}>
                <h1>Компания</h1>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>

            </div>
            <div className={footer_qismi.social_qismi}>
                <h1>Мы в соцсетях</h1>
                 <div className={footer_qismi.social}>
                    <FaTelegramPlane />
                    <FaInstagram />
                    <FaFacebookF />
                    </div>
            </div>
<div className={footer_qismi.mobile_qismi}>
    <h1>Мобильные устройства</h1>

    <button className={footer_qismi.store}>
        <FaGooglePlay />
        Google Play
    </button>

    <button className={footer_qismi.store}>
        <FaApple />
        App Store
    </button>

    <button className={footer_qismi.up_btn}>
        <FaChevronUp />
    </button>
</div>
    </div>
    )
}

export default Footer
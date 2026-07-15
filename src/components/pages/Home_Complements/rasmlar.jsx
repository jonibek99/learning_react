import odam_rasmi from './../../img/odam.jpg'
import timsoh_rasmi from './../../img/timsoh.png'
import pisarki_duhtar_rasmi from './../../img/bachaki_duhtar.png'
import wedding_rasm from './../../img/wedding.png'
import rasm_module_css from './rasmlar.module.css'

const Rasmlar_part=()=>{
    return(
        <div className={rasm_module_css.body}>
            <div className={rasm_module_css.left}>
                <img src={odam_rasmi} alt="" />
            </div>
            <div className={rasm_module_css.right}>
        <div className={rasm_module_css.top}>
            <img src={timsoh_rasmi} alt="" />
            
        </div>

       
        <div className={rasm_module_css.bottom}>
            <img src={wedding_rasm} alt="" />
            <img src={pisarki_duhtar_rasmi} alt="" />
        </div>
            </div>
        </div>
    )
}
export default Rasmlar_part
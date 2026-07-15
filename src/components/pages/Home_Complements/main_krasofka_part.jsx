import krasovka from "../../../components/img/krasovka.jpg"

import krasofka_css from './main.krasofka.module.css'
const Main_krasofka_module=()=>{
    return(
        <div className={krasofka_css.body}>
            <img src={krasovka}/>
        </div>
    )
}


export default Main_krasofka_module
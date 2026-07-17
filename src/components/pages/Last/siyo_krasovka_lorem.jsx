import siyo_krasofka from './../../img/siyo_krasofka.jpg'

import lorem_css from './siyo_krasovka_lorem.module.css'



const Lorem_siyo_part=()=>{
    return(
        <div className={lorem_css.body}>
            <h1>LOREM IPSUM</h1>

            <div className={lorem_css.content}>

                <div className={lorem_css.img_class}>

                    <img src={siyo_krasofka} alt="" />

                </div>

                <div className={lorem_css.info}>
                    <div className={lorem_css.price}>
                        <h2>500 Сум</h2> <span>2000 рубл</span>

                    </div>
                    <p><strong>Доставка:</strong> 318,94 сум</p>
                    <p>В Uzbekistan через BTC</p>
                    <p>Расчётное время доставки: 29-48 дней</p>


                 </div>

            </div>
            
        </div>
    )
}


export default Lorem_siyo_part
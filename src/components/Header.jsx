import { Link } from 'react-router-dom'
import header_qismi from './Header.module.css'

const Header=()=>{
    return(
        <div className={header_qismi.bosh_qismi}>
            <div className={header_qismi.input_qismi}>
                <h1>Mening Elonim</h1>
                <Link to='/'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/last">Last</Link>
                <input type="text" placeholder='enter'/>
                <button type='submit'>🔍</button> 
                </div>
            

        </div>
    )
}

export default Header
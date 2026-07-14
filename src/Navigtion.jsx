import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from'./components/pages/home'
import About from './components/pages/about'
import Footer from "./components/footer"
import Last from "./components/pages/Last"



const Navigation = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/last" element={<Last/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Navigation
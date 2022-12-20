import { useContext } from 'react';
import { ThemeContext } from '../App';
import light from '../image/light.svg'
import dark from '../image/dark.svg'


const Content =()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <main className = {theme === "dark"?"dark":"light"}> 
            <div>
                <h1>NameEIEI Official</h1>
                <p>DarkMode</p>
            </div>
            <img src={theme==="dark" ? dark : light} alt="Logo"/>
        </main>
    )
}

export default Content;
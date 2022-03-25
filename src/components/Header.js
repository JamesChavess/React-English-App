import lightMenu from "../imgs/lightMenu.svg"
import darkMenu from "../imgs/darkMenu.svg"
import lightLogo from "../imgs/lightLogo.svg"
import darkLogo from "../imgs/darkLogo.svg"
import admin from "../imgs/admin.svg"
import contact from "../imgs/contact.svg"
export default function Header(props){
    return(<>
    <header>
        <img alt="site logo"/>create title and logo 
        <article>
        <img onClick={()=> {document.getElementById("popUp").classList.toggle('hidden')}} className='menu' srcSet={props.darkMode ? darkMenu : lightMenu}/>
          <ul id='popUp' className='hidden'>
            <li ><img srcSet={admin}/><h6>Admin</h6></li>
            <li onClick={()=> {props.themeToggle()}}> <img srcSet={props.darkMode ? lightLogo : darkLogo}></img>{props.darkMode ? <h6>Light Mode</h6> : <h6>Dark Mode</h6>} </li>
            <li><img srcSet={contact}/><h6>Contact Us</h6></li>
          </ul>
          </article>
        </header> 
    </>)
}
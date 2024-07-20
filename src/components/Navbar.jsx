
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="nav">
        <logo class="logo"><span class="green">T</span>anya <span class="green">S</span>ingh</logo>
        <components class="comp">
            <li class="components">
                <a  href='#Hero'>Home</a>
                <a  href='#About'>About Us</a>
                <a  href='#Skills'>Skills</a>
                <a  href='#Portfolio'>Portfolio</a>
                <a  href='#Blogs'>Blogs</a>
                <a  href='#Contact'>Contact Us</a>
            </li>
        </components>
    </nav>

  )
}

export default Navbar

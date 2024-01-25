import { Link } from "react-router-dom"
import style from './header.module.css'

const Header = () => (
    <header className={style.container}>
        <nav>
            <ul>
                <li>
                    <Link to="/helps">Help</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </nav>
    </header >
)

export default Header
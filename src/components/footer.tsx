import style from './style.module.css'
import { SiReact } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className={style["container-footer"]}>
            <p>Desenvolvido por</p>
            <a target='_blank' href="https://github.com/ericksax">Erick Freitas</a>
            <span>com 💚 e </span>
            <SiReact color='green' size={12} />
        </footer>
    )
}

export default Footer
import { Link } from 'react-router-dom'
import style from './cardHelp.module.css'
import Badge from './badge'
import { Button } from './button'
import { SiGithub } from 'react-icons/si'

const CardHelp = () => {
    return (
        <div className={style.container}>
            <strong>Node não compila</strong>
            <p>Paulo Sérgio</p>
            <div className={style["badges-list"]}>
                <Badge>Typescript</Badge>
                <Badge>Nodejs</Badge>
            </div>
            <article>Estou configurando um rojeto node com tsx e typescript, porém ao tentar compilar o projeto o node não compilaEstou configurando um rojeto node com tsx e typescript, porém ao tentar compilarEstou configurando um rojeto node com tsx e typescript, porém ao tentar compilar o projeto o node não compila o projeto o node não compila</article>
            <Button variant="primary">Entrar em contato</Button>
            <Link to="/"><SiGithub color="silver" size={20} /></Link>
        </div>
    )
}

export default CardHelp
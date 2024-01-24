import { Link } from "react-router-dom"
import style from './register.module.css'
import { Button } from "../components/button"

const Register = () => {
    return (
        <>

            <header className={style.container}>
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <form className={style["form-container"]}>
                    <div>
                        <label htmlFor="email">Name</label>
                        <input name="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="address">E-mail</label>
                        <input name="address" type="password" />
                    </div>
                    <div>
                        <label htmlFor="address">Senha</label>
                        <input name="address" type="password" />
                    </div>

                    <Button>Cadastrar</Button>
                </form>
            </main>
        </>
    )
}

export default Register
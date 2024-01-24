import { useReducer, useRef } from "react"
import styles from './login.module.css'
import { Link } from "react-router-dom"


const initialState: initialStateType = {
    name: '',
    email: '',
    address: ''
}

type initialStateType = {
    name: string
    email: string
    address: string
}

type actionType = {
    type: string
    payload: initialStateType
}

const reducer = (state: initialStateType, action: actionType) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formRef.current) {
            const formData = new FormData(formRef.current)

            const dataForm: initialStateType = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                address: formData.get('address') as string
            }

            dispatch({ type: 'SUBMIT', payload: dataForm })
            formRef.current!.reset()
            console.log(state)

        } else {
            console.log('Formulário não encontrado')
        }
    }


    return (
        <main className={styles.container}>
            <form ref={formRef} onSubmit={handleSubmit}
                className={styles["form-box"]}>
                <h1>Login<span>Dev</span></h1>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="address">Senha</label>
                    <input name="address" type="password" />
                </div>

                <span>
                    <p>Ainda não tem conta?</p>
                    <Link to="/cadastro">
                        <a>Cadastre-se</a>
                    </Link>
                </span>
                <button type='submit'
                >Entrar</button>
            </form>
        </main>
    )
}

export default Login
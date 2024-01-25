import { useForm } from "react-hook-form"
import { Input } from "./Input"
import style from './contentForm.module.css'
type ContentFormTypes = {
    register: ReturnType<typeof useForm>["register"]
}

const ContentForm = ({ register }: ContentFormTypes) => {
    return (
        <div className={style["content-form-container"]} >
            <Input label="Nome" type='text' registerName="name" register={register} />
            <Input label="Email" type='email' registerName="email" register={register} />
            <Input label="Senha" type='password' registerName="address" register={register} />
        </div >
    )
}

export { ContentForm }
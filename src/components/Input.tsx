import React, { forwardRef } from "react"
import { useForm } from "react-hook-form"
import style from './input.module.css'
type InputTypes = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    register: ReturnType<typeof useForm>["register"],
    registerName: string
}
const Input = forwardRef<HTMLInputElement, InputTypes>(({ label, registerName, register, ...rest }, ref) => {
    return (
        <div className={style["input-container"]}>
            <label htmlFor="email">{label}</label>
            <input  {...register(registerName)} ref={ref} {...rest} />
        </div>
    )
})

export { Input }
import { useForm } from "react-hook-form"
import { Input } from "./Input"
import style from './contentForm.module.css'
type ContentFormTypes = {
    register: ReturnType<typeof useForm>["register"]
}

const ContentFormTwo = ({ register }: ContentFormTypes) => {
    return (
        <div className={style["content-form-container"]}>
            <Input label="Nome" type='text' registerName="name" register={register} />
            <Input label="Email" type='email' registerName="email" register={register} />
            <div>
                <label htmlFor="language">Sua melhor linguagem</label>
                <select name="langlage" id="">
                    <option value="js">Javascript</option>
                    <option value="ts">Typescript</option>
                    <option value="ts">Kotlin</option>
                    <option value="ts">Ryby</option>
                    <option value="ts">Rust</option>
                    <option value="ts">Java</option>
                    <option value="ts">Phyton</option>
                </select>
            </div>
        </div>
    )
}

export { ContentFormTwo }
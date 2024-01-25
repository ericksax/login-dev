import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "./button"
import style from './form.module.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { ContentForm } from "./contentForm"
import { useStepForm } from "../Hooks/useStepForm"
import { ContentFormTwo } from "./contentFormTwo"

const Form = () => {
    const { register, handleSubmit } = useForm()
    const contentForm = [<ContentForm register={register} />, <ContentFormTwo register={register} />]
    const { currentForm, handleCurrentStep } = useStepForm()

    const submit = (formdata: any) => {

    }

    return (
        <main>
            <form onSubmit={handleSubmit(submit)} className={style["form-container"]}>
                {contentForm[currentForm]}
                <div className={style["button-container"]}>
                    <Button type="button" variant="secondary" onClick={() => handleCurrentStep({ step: currentForm - 1 })}>
                        <FaArrowLeft size={16} />
                        prev
                    </Button>
                    <Button variant="primary" onClick={() => handleCurrentStep({ step: currentForm + 1 })}>
                        Next
                        <FaArrowRight size={16} />
                    </Button>
                </div>
            </form>
        </main>
    )
}

export { Form }
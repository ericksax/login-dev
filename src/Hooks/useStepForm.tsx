import { useState } from "react"

type UseStepFormType = & {
    step: number
}

const useStepForm = () => {
    const [currentForm, setCurrentForm] = useState(0)

    const handleCurrentStep = ({ step }: UseStepFormType) => {
        setCurrentForm(step)
    }

    return {
        currentForm,
        setCurrentForm,
        handleCurrentStep
    }
}

export { useStepForm }
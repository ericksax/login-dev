import { ButtonHTMLAttributes } from 'react'
import style from './button.module.css'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    variant: 'primary' | 'secondary'
}

export const Button = ({ children, variant, ...rest }: ButtonTypes) => {
    return (
        <button className={variant === 'primary' ? style["primary-container"] : style["secondary-container"]} {...rest}>{children}</ button>
    )
}
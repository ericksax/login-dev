import style from './button.module.css'

export const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className={style.container}>{children}</ button>
    )
}
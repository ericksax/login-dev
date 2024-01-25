import React from "react"
import style from './badge.module.css'
const Badge = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className={style["badge-container"]}>
            {children}
        </span>
    )
}

export default Badge
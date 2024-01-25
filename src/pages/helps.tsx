import CardHelp from "../components/cardHelp"
import Header from "../components/header"
import style from "./helps.module.css"

const Helps = () => {
    return (
        <>
            <Header />
            <div className={style["main-container"]}>
                {Array.from({ length: 10 }).map((_, index) => <CardHelp key={index} />)}

            </div>
        </>
    )
}

export default Helps
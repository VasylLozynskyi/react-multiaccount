import React from "react";
import style from "./supportblock.module.css";

const SupprotBlock = (props) => {
    return (
        <div id="support" className={style.container}>
            <h2 className={style.frameArrow}>{props.data.title}</h2>
            <section className={style.infosupport}>
            </section>
        </div>
    )
}
export default SupprotBlock;
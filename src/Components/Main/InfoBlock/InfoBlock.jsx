import React from "react";
import style from "./infoblock.module.css";

const InfoBlock = (props) => {
    return(
       <div id="infoblock" className={style.container}>
            <section className={style.sectoninfo}>
                <h2>{props.data.title1}</h2>
                <p>{props.data.text11}</p>
                <p>{props.data.text12}</p>
            </section>
            <section className={style.testinfo}>
                <h2>{props.data.title2}</h2>
                <section className={style.sectiontest}>
                    <div className={style.backgroundtest}>
                    </div>
                    <div className={style.textsectiontest}>
                        <p>{props.data.text21}</p>
                        <p>{props.data.text22}</p>
                    </div>
                </section>
            </section>
       </div>
    )
}
export default InfoBlock;
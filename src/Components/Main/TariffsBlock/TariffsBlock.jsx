import React from "react";
import Cardtariff from "./Cardtariff";
import style from "./tariffs.module.css"

const TariffsBlock = (props) => {

    return(
        <div id="tariffs" className={style.container}>
            <div className={style.tariffscontainer}>
                <h2>{props.data.title}</h2>
                <p>{props.data.text}</p>
                <div className={style.tariffsFlex}>
                    {props.data.cardtariffs.map(el => {
                        return(
                            <Cardtariff key={el.key} datacard = {el}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default TariffsBlock;
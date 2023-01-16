import React from "react";
import style from "./tariffs.module.css"

let Cardtariff = (props) => {
    return (
            <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>{props.datacard.settime}</h4>
                            <p>{props.datacard.timetext}</p>
                        </div>
                        <div className={style.pricecardtariff}>{props.datacard.price}</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li key="1">{props.datacard.list.li1}</li>
                            <li key="2">{props.datacard.list.li2}</li>
                            <li key="3">{props.datacard.list.li3}</li>
                            <li key="4">{props.datacard.list.li4}</li>
                            <li key="5">{props.datacard.list.li5}</li>
                        </ul>
            </div>
    )
}
export default Cardtariff;
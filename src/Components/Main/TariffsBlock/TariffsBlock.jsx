import React from "react";
import style from "./tariffs.module.css"

const TariffsBlock = (props) => {
    return(
        <div id="tariffs" className={style.container}>
            <div className={style.tariffscontainer}>
                <h2>{props.data.title}</h2>
                <p>{props.data.text}</p>
                <div className={style.tariffsFlex}>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>{props.data.cardtariffs.first.settime}</h4>
                            <p>{props.data.cardtariffs.first.timetext}</p>
                        </div>
                        <div className={style.pricecardtariff}>{props.data.cardtariffs.first.price}</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>{props.data.cardtariffs.first.list.li1}</li>
                            <li>{props.data.cardtariffs.first.list.li2}</li>
                            <li>{props.data.cardtariffs.first.list.li3}</li>
                            <li>{props.data.cardtariffs.first.list.li4}</li>
                            <li>{props.data.cardtariffs.first.list.li5}</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>{props.data.cardtariffs.second.settime}</h4>
                            <p>{props.data.cardtariffs.second.timetext}</p>
                        </div>
                        <div className={style.pricecardtariff}>{props.data.cardtariffs.second.price}</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>{props.data.cardtariffs.second.list.li1}</li>
                            <li>{props.data.cardtariffs.second.list.li2}</li>
                            <li>{props.data.cardtariffs.second.list.li3}</li>
                            <li>{props.data.cardtariffs.second.list.li4}</li>
                            <li>{props.data.cardtariffs.second.list.li5}</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>{props.data.cardtariffs.third.settime}</h4>
                            <p>{props.data.cardtariffs.third.timetext}</p>
                        </div>
                        <div className={style.pricecardtariff}>{props.data.cardtariffs.third.price}</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>{props.data.cardtariffs.third.list.li1}</li>
                            <li>{props.data.cardtariffs.third.list.li2}</li>
                            <li>{props.data.cardtariffs.third.list.li3}</li>
                            <li>{props.data.cardtariffs.third.list.li4}</li>
                            <li>{props.data.cardtariffs.third.list.li5}</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>{props.data.cardtariffs.four.settime}</h4>
                            <p>{props.data.cardtariffs.four.timetext}</p>
                        </div>
                        <div className={style.pricecardtariff}>{props.data.cardtariffs.four.price}</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>{props.data.cardtariffs.four.list.li1}</li>
                            <li>{props.data.cardtariffs.four.list.li2}</li>
                            <li>{props.data.cardtariffs.four.list.li3}</li>
                            <li>{props.data.cardtariffs.four.list.li4}</li>
                            <li>{props.data.cardtariffs.four.list.li5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TariffsBlock;
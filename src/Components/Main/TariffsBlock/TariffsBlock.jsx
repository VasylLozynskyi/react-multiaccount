import React from "react";
import style from "./tariffs.module.css"

const TariffsBlock = () => {
    return(

        <div className={style.container}>
            <div className={style.tariffscontainer}>
                <h2>Tariffs</h2>
                <p>Test for 24 hours for free when registering in the browser</p>
                <div className={style.tariffsFlex}>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>1 Month</h4>
                            <p>for 32 days</p>
                        </div>
                        <div className={style.pricecardtariff}>888 $</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>access to the browser for 32 days</li>
                            <li>instant backup</li>
                            <li>storage of profiles in the cloud</li>
                            <li>Browser fingerprint substitution</li>
                            <li>sharing cookies</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>3 Month</h4>
                            <p>for 95 days</p>
                        </div>
                        <div className={style.pricecardtariff}>2200 $</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>access to the browser for 95 days</li>
                            <li>instant backup</li>
                            <li>storage of profiles in the cloud</li>
                            <li>Browser fingerprint substitution</li>
                            <li>sharing cookies</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>6 Month</h4>
                            <p>for 190 days</p>
                        </div>
                        <div className={style.pricecardtariff}>4000 $</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>access to the browser for 190 days</li>
                            <li>instant backup</li>
                            <li>storage of profiles in the cloud</li>
                            <li>Browser fingerprint substitution</li>
                            <li>sharing cookies</li>
                        </ul>
                    </div>
                    <div className={style.cardtariff}>
                        <div className={style.titletariffblock}>
                            <h4>Year</h4>
                            <p>for 1 year</p>
                        </div>
                        <div className={style.pricecardtariff}>7500 $</div>
                        <div className={style.flexbuttoncard}>
                            <button className={style.buttoncardtariff}>Choose</button>
                        </div>
                        <ul>
                            <li>access to the browser for 370 days</li>
                            <li>instant backup</li>
                            <li>storage of profiles in the cloud</li>
                            <li>Browser fingerprint substitution</li>
                            <li>sharing cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TariffsBlock;
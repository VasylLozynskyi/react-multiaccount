import React from "react";
import style from "./infoblock.module.css";

const InfoBlock = () => {
    return(
       <div className={style.container}>
            <section className={style.sectoninfo}>
                <h2>Why sites are not blocked for multiple accounts?</h2>
                <p>
                    Anti-fraud site system is an algorithm that is designed to track fraudulent activities on the site, including multi-accounts made from one computer.
                </p>
                <p>
                    Pri sozdanii profilya v brauzere MULTIACCOUNT, on podmenyayet vse izvestnyye tsifrovyye otpechatki brauzera, po kotorym antifrod sistemy Vas i otslezhivayut
                    When creating a profile in the MULTIACCOUNT browser, it replaces all known digital fingerprints of the browser, by which the antifraud systems track you.
                </p>
            </section>
            <section className={style.testinfo}>
                <h2>FREE TEST</h2>
                <section className={style.sectiontest}>
                    <div className={style.backgroundtest}>
                    </div>
                    <div className={style.textsectiontest}>
                        <p>
                            After registering with MULTIACCOUNT you can use all Browser Antidetect capabilities first 24 hours!
                        </p>
                        <p>
                            You can also FREE test our proxies
                        </p>
                    </div>
                </section>
            </section>
       </div>
    )
}
export default InfoBlock;
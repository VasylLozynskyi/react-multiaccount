import React from "react";
import style from "./FAQ.module.css";
import smm from "../../../assets/images/smm.png"
import airdrop from "../../../assets/images/airdrop.png"
import anonim from "../../../assets/images/anonim.png"
import bonus from "../../../assets/images/bonus.png"
import reclam from "../../../assets/images/reclam.png"
import trafic from "../../../assets/images/trafic.png"
import telegram from "../../../assets/images/telegramicon.png"
import youtube from "../../../assets/images/youtube_icon.png"

const FAQBlock = () => {
    return(
        <div className={style.container}>
            <div className={style.faqmultiaccount}>
                <h2>What is the Multiaccount Browser for?</h2>
                <div className={style.faqmultiaccountflexcard}>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={smm} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            Multi-account SMM
                        </div>
                        <p>You can manage hundreds of social media accounts at the same time. Multiaccount will help protect your account from being banned by securely hiding it from Google/facebook/Instagram anti-fraud systems.</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={reclam} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            Advertising platforms
                        </div>
                        <p>all major ad platforms use complex algorithms to protect against running multiple accounts from the same device, but now you don't have to worry about that anymore as you can run each account in a completely separate browser environment with Multiaccount.</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={airdrop} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            Airdrop и Coinlist
                        </div>
                        <p>Tokensale/Whitelist bypass blocking, create
                        multiple accounts for token sale and whitelist avoiding ban to get more chances to earn.</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={trafic} alt="trafic" />
                        </div>
                        <div className={style.titlecardmult}>
                            Traffic arbitration
                        </div>
                        <p></p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={bonus} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            Bonus hunting
                        </div>
                        <p></p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={anonim} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            Anonymity
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className={style.fingerprint}>
                <h2>Browser fingerprint
                What's this? and what fingerprints does Multiaccount replace</h2>
                <div className={style.flexfingerprint}>
                    <div className={style.leftfingblock}>
                        <div>
                            <button>WebGl</button>
                        </div>
                        <div>
                            <button>Canvas</button>
                        </div>
                        <div>
                            <button>Fonts</button>
                        </div>
                        <div>
                            <button>WebRTC</button>
                        </div>
                        <div>
                            <button>Geolocation</button>
                        </div>
                    </div>
                    <div className={style.rigthfingblock}>
                    The Geolocation API provides websites with access to a high-level interface that allows them to query for physical location information such as latitude and longitude, thereby breaking the user's anonymity. This page will check if the Geolocation API is working in your browser, show any data that can be retrieved, and ensure that websites do not access the API without your explicit permission.
                    </div>
                </div>
            </div>
            <div className={style.fingcontacts}>
                <div className={style.flexfingcontacts}>
                    <div className={style.telegramcard}>
                        <h2>Support</h2>
                        <p>If you have any questions about
                        browser work, then write
                        we will gladly help you!</p>
                        <a href="https://t.me/Poleznosti_pro">https://t.me/Poleznosti_pro</a>
                        <img src={telegram} alt="telegram" />
                    </div>
                    <div className={style.youtubecard}>
                        <h2>Youtube</h2>
                        <p>Subscribe to the channel
                        What not to miss
                        important information!</p>
                        <a href="www.youtube.com/c/Полезности">www.youtube.com/c/Полезности</a>
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQBlock;
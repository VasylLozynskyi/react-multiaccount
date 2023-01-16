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
import { useState } from "react";

const FAQBlock = (props) => {
    let [soursetext, setSoursetext] = useState(props.data.fingerprint.sourses[0].text);
    
    return(
        <div id="faq" className={style.container}>
            <div className={style.faqmultiaccount}>
                <h2>{props.data.browser.title}</h2>
                <div className={style.faqmultiaccountflexcard}>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={smm} alt="smm"/>
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card1.title}
                        </div>
                        <p>{props.data.browser.for.card1.text}</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={reclam} alt="reclam"/>
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card2.title}
                        </div>
                        <p>{props.data.browser.for.card2.text}</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={airdrop} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card3.title}
                        </div>
                        <p>{props.data.browser.for.card3.text}</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={trafic} alt="trafic" />
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card4.title}
                        </div>
                        <p>{props.data.browser.for.card4.text}</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={bonus} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card5.title}
                        </div>
                        <p>{props.data.browser.for.card5.text}</p>
                    </div>
                    <div className={style.cardmult}>
                        <div className={style.imgblock}>
                            <img src={anonim} alt="smm" />
                        </div>
                        <div className={style.titlecardmult}>
                            {props.data.browser.for.card6.title}
                        </div>
                        <p>{props.data.browser.for.card6.text}</p>
                    </div>
                </div>
            </div>
            <div className={style.fingerprint}>
                <h2>{props.data.fingerprint.title}</h2>
                <div className={style.flexfingerprint}>
                    <div className={style.leftfingblock}>
                        {props.data.fingerprint.sourses.map(el => {
                            let ChooseHandler = () => {
                                setSoursetext(el.text);
                            }
                            return(
                                <div>
                                    <button onClick = {ChooseHandler}>{el.sourse}</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.rigthfingblock}>
                        {soursetext}
                    </div>
                </div>
            </div>
            <div className={style.fingcontacts}>
                <div className={style.flexfingcontacts}>
                    <div className={style.telegramcard}>
                        <h2>{props.data.contacts.cards.support.title}</h2>
                        <p>{props.data.contacts.cards.support.text}</p>
                        <a href={props.data.contacts.cards.support.link}>{props.data.contacts.cards.support.link}</a>
                        <img src={telegram} alt="telegram" />
                    </div>
                    <div className={style.youtubecard}>
                        <h2>{props.data.contacts.cards.youtube.title}</h2>
                        <p>{props.data.contacts.cards.youtube.text}</p>
                        <a href={props.data.contacts.cards.youtube.link}>{props.data.contacts.cards.youtube.link}</a>
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQBlock;
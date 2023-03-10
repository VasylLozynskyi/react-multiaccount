import React from "react";
import style from "./header.module.css";
import logo from "../../assets/images/image_LOGO.png"
import ourdownload from "../../download/someData.pdf"

const Header = (props) => {
    return (
        <div id="header" className={style.container}>
            <div className={style.flexheader}>
                <div className={style.logo}>
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <div className={style.flexnav}>
                    <div className={style.nuvbar}>
                        <a href="#tariffs">{props.data.nav.link1}</a>
                        <a href="#proxy">{props.data.nav.link2}</a>
                        <a href="#faq">{props.data.nav.link3}</a>
                        <a href="#support">{props.data.nav.link4}</a>
                    </div>
                    <a href={ourdownload} target="_blank" rel="noopener noreferrer" download='Browser.pdf'>
                        <button className={style.download}>Download↓</button>
                    </a>
                    
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.mainheader}>
                    <div className={style.content}>
                        <h2>Antidetect <span>Browser</span></h2>
                        <h1>MULTIACCOUNT</h1>
                        <p>{props.data.titlesection.subtitle}</p>
                        <a href={ourdownload} target="_blank" rel="noopener noreferrer" download='Browser.pdf'>
                            <button className={style.dowlBrowder}>{props.data.titlesection.btnDownload}</button>
                        </a>
                        <p>{props.data.titlesection.subtitle2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
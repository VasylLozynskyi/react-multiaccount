import React from "react";
import style from "./header.module.css";
import logo from "../../assets/images/image_LOGO.png"

const Header = () => {
    return (
        <div id="header" className={style.container}>
            <div className={style.flexheader}>
                <div className={style.logo}>
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <div className={style.flexnav}>
                    <div className={style.nuvbar}>
                        <a href="#tariffs">Tariffs</a>
                        <a href="#proxy">Proxy</a>
                        <a href="#FAQ">FAQ</a>
                        <a href="#support">Support</a>
                    </div>
                    <button className={style.download}>Download↓</button>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.mainheader}>
                    <div className={style.content}>
                        <h2>Antidetect <span>Browser</span></h2>
                        <h1>MULTIACCOUNT</h1>
                        <p>Unlimited quantity profiles without a ban!</p>
                        <button className={style.dowlBrowder}>Download Browser for Windows</button>
                        <p>The best protection is being tracked on sites</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
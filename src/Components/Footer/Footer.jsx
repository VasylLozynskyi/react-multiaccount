import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/images/log_footer.png";

const Footer = () => {
    return(
        <div className={style.container}>
            <div className={style.footerblock}>
                <div className={style.flexfooter}>
                    <div className={style.navfooter}>
                        <div className={style.menu}>Menu</div>
                            <div className={style.nuvfooterbar}>
                                <a href="#tariffs">Tariffs</a>
                                <a href="#proxy">Proxy</a>
                                <a href="#FAQ">FAQ</a>
                                <a href="#support">Support</a>
                            </div>
                            <button className={style.download}>Download Browser for Windows</button>
                    </div>
                    <div className={style.logfooter}>
                        <div className={style.logo}>
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                        <button className={style.download}>Download↓</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
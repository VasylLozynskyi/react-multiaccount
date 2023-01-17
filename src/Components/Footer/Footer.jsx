import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/images/log_footer.png";
import ourdownload from "../../download/someData.pdf"

const Footer = (props) => {
    return(
        <div className={style.container}>
            <div className={style.footerblock}>
                <div className={style.flexfooter}>
                    <div className={style.navfooter}>
                        <div className={style.menu}>{props.datafooter.navtitle}</div>
                            <div className={style.nuvfooterbar}>
                                <a href="#tariffs">{props.datanav.nav.link1}</a>
                                <a href="#proxy">{props.datanav.nav.link2}</a>
                                <a href="#FAQ">{props.datanav.nav.link3}</a>
                                <a href="#support">{props.datanav.nav.link4}</a>
                            </div>
                            <button className={style.download}>{props.datanav.titlesection.btnDownload}</button>
                    </div>
                    <div className={style.logfooter}>
                        <div className={style.logo}>
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                        <a href={ourdownload} target="_blank" rel="noopener noreferrer" download='Browser.pdf'>
                            <button className={style.download}>Download↓</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
import React from "react";
import style from "./proxyblock.module.css";

const ProxyBlock = (props) => {
    return(
        <div id="proxy" className={style.container}>
            <section className={style.mobileproxy}>
                <h2>{props.data.titlesection.title}</h2>
                <p>{props.data.titlesection.text}</p>
            </section>
            <section className={style.infoproxy}>
                <div className={style.titleflexproxy}>
                    <div><h2>{props.data.contentsection.title1}</h2></div>
                    <div><h2>{props.data.contentsection.title2}</h2></div>  
                </div>
                <div className={style.infoflexproxy}>
                    <div className={style.leftinfoblock}>
                        <ul>
                            <li>
                                <h3>{props.data.contentsection.list1.li1.title}</h3>
                                <p>{props.data.contentsection.list1.li1.text}</p>
                            </li>
                            <li>
                                <h3>{props.data.contentsection.list1.li2.title}</h3>
                                <p>{props.data.contentsection.list1.li2.text}</p>
                            </li>
                            <li>
                                <h3>{props.data.contentsection.list1.li3.title}</h3>
                                <p>{props.data.contentsection.list1.li3.text}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={style.rightinfoblock}>
                        <ul>
                            <li>
                                <h3>{props.data.contentsection.list2.li1.title}</h3>
                                <p>{props.data.contentsection.list2.li1.text}</p>
                            </li>
                            <li>
                                <h3>{props.data.contentsection.list2.li2.title}</h3>
                                <p>{props.data.contentsection.list2.li2.text}</p>
                            </li>
                            <li>
                                <h3>{props.data.contentsection.list2.li3.title1} <span>{props.data.contentsection.list2.li3.title2}</span> {props.data.contentsection.list2.li3.title3}</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
} 
export default ProxyBlock;
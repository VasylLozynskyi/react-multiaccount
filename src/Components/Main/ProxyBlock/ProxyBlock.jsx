import React from "react";
import style from "./proxyblock.module.css";

const ProxyBlock = () => {
    return(
        <div className={style.container}>
            <section className={style.mobileproxy}>
                <h2>Mobile proxies</h2>
                <p>  
                    Our proxies are as different as possible from everything that is presented on the market.
                </p>
            </section>
            <section className={style.infoproxy}>
                <div className={style.titleflexproxy}>
                    <div><h2>As with all services:</h2></div>
                    <div><h2>Like we have:</h2></div>  
                </div>
                <div className={style.infoflexproxy}>
                    <div className={style.leftinfoblock}>
                        <ul>
                            <li>
                                <h3>User</h3>
                                <p>You buy access to the service</p>
                            </li>
                            <li>
                                <h3>Service Server</h3>
                                <p>It performs an authorization check and associates you with one specific modem</p>
                            </li>
                            <li>
                                <h3>Mobile modem</h3>
                                <p>This modem where a SIM card of one operator is inserted, it is located in one location and receives a narrow range ip tied to one cell tower. Over time, these ips will be repeated when changing, and when you switch accounts, you will log in from different accounts using one ip and will be blocked</p>
                            </li>
                        </ul>
                    </div>
                    <div className={style.rightinfoblock}>
                        <ul>
                            <li>
                                <h3>User</h3>
                                <p>You buy access to our service</p>
                            </li>
                            <li>
                                <h3>Our server</h3>
                                <p>Our server performs authorization and provides you with access to more than 20,000 modems, and when you change the ip address, it checks for ip repetition so that you do not get the same ip again</p>
                            </li>
                            <li>
                                <h3>Более <span>20 000</span> модемов</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
} 
export default ProxyBlock;
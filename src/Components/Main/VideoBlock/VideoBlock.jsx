import React from "react";
import style from "./videoblock.module.css";

const VideoBlock = (props) => {
    return(
    <div id="video" className={style.container}>
        <div className={style.videosection}>
            <div className={style.infovideo}>
                <iframe width="600" height="400" src={props.data.linkvideo} title="#" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div>
                    <p>{props.data.subtitle}</p>
                    <h2>{props.data.title}</h2>
                </div>
            </div>
        </div>
    </div>
    )
}
export default VideoBlock;
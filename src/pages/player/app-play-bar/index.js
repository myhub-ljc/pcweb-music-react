import React, { memo } from 'react';

import { Slider } from 'antd';
import {
    AppPlayBarWrapper
} from './style';

export default memo(function JCAppPlayBar() {
    return (
        <AppPlayBarWrapper className="sprite_player">
            <div className="content wrap_v2">
                <div className="control">
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
                    <button className="sprite_player next"></button>
                </div>
                <div className="playInfo">
                    <div className="image">
                        <img src="http://p3.music.126.net/AyT3QaSZHwhga2Z9EU3khg==/109951165198104753.jpg?param=34y34" alt="" />
                    </div>
                    <div className="song">
                        <span>殉情的抹香鲸</span>
                        <span>(翻自 三块木头)</span>
                        <Slider />
                    </div>
                    <div className="time">
                        <span>01:23</span>
                        <span className="divider">/</span>
                        <span>04:23</span>
                    </div>
                </div>
                <div className="operator">
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </div>
            </div>
        </AppPlayBarWrapper>
    )
})

import React, { memo } from 'react';

import { SongsCover } from './style';
import { getCount, getSizeImage } from '@/utils/format-utils';

export default memo(function JCSongsCover(props) {

    const { info } = props;

    return (
        <SongsCover>
            <div className="top-cover">
                <img src={getSizeImage(info.picUrl, 140)} alt=""/>
                <div className="info">
                    <div>
                        <i className="sprite_icon erji"></i>
                        {getCount(info.playCount)}
                    </div>
                    <div>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="middle-cover text-nowrap">
                {info.name}
            </div>
            <div className="bottom-cover text-nowrap">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCover>
    )
})

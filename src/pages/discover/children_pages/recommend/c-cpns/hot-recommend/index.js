import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import JCRecommendTitle from '@/components/recommend-title/index';
import {
    HotRecommendWrapper
} from './style';
import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/constants';
import JCSongsCover from '@/components/songs-cover/index';

export default memo(function JCHotRecommend() {

    //react redux
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual);
    const dispatch = useDispatch();

    //other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    }, [dispatch]);

    return (
        <HotRecommendWrapper>
            <JCRecommendTitle title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>
            <div className="recommend-list">
                {
                   hotRecommends.map((item, index) => {
                        return <JCSongsCover key={item} info={item} />
                   })
                }
            </div>  
        </HotRecommendWrapper>
    )
})

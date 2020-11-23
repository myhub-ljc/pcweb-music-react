import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import JCRecommendTitle from '@/components/recommend-title/index';
import { getTopListAction } from '../../store/actionCreators';
import JCTopRanking from '@/components/top-ranking/index';
import { TopRankingWrapper } from './style';

export default memo(function JCRanking() {

    //redux hooks
    const { upRanking, newRangking, orignRanking } = useSelector( state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRangking: state.getIn(["recommend", "newRanking"]),
        orignRanking: state.getIn(["recommend", "orignRanking"])
    }), shallowEqual);
    const dispatch = useDispatch();

    //other hooks
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch]);

    return (
        <TopRankingWrapper>
            <JCRecommendTitle title="榜单"/>
            <div className="tops">
                <JCTopRanking info={upRanking}/>
                <JCTopRanking info={newRangking}/>
                <JCTopRanking info={orignRanking}/>
            </div>
        </TopRankingWrapper>
    )
})

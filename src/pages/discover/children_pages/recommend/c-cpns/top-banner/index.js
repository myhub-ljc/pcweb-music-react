import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'; 

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannersLeft,
    BannersRight,
    BannerControl
} from './style';

export default memo(function JCTopBanners() {
    //1,组件内部维护的state
    const [ currentIndex, setCurrentIndex ] = useState(0);

    //2,redux
    //组件和redux关联目的是获取数据和进行dispatch操作(而这里必须要传入第二个参数shallowEqual是为了要求做一个浅层比较)
    const { topBanners } = useSelector(state => ({
    //因为使用了immutable.js，因此当然要使用get
    // topBanners: state.get("recommend").get("topBanners")
    //当然了如果嫌弃上面这样写麻烦的话也可以使用下面这种写法也是可以的
    topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)
    const dispatch = useDispatch();

    //3,其他hooks
    const bannerRef = useRef();
    
    useEffect(() => { 
        dispatch(getTopBannerAction());
    }, [dispatch]);

    const bannerBgimage = useCallback((from, to) => {
        setCurrentIndex(to);
    }, []);

    //4,其它逻辑代码
    const bannerChange = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");


    //5,jsx代码
    return (
        <BannerWrapper bgimage={bannerChange}>
            <div className="banner wrap-v2">
                <BannersLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerBgimage}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannersLeft>
                <BannersRight></BannersRight>
                <BannerControl>
                    <button className="btn left" onClick={e => {bannerRef.current.prev()}}></button>
                    <button className="btn right" onClick={e => {bannerRef.current.next()}}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

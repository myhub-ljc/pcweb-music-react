import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Carousel } from 'antd';
import { getNewAlbumsAction } from '../../store/actionCreators';

import JCRecommendTitle from '@/components/recommend-title/index';
import JCAlbumCover from '@/components/album-cover/index';
import { AlbumWrapper } from './style';

export default memo(function JCNewAlbum() {

    //首先，可以选择将数据据交给组件内部来进行一个维护(但是这里我还是使用redux来进行统一管理吧)
    // const [ albums, setAlbums ] = useState([]);

    // useEffect(() => {
    //     getNewAlbums(10).then(res => {
    //         console.log(res);
    //         setAlbums(res.albums);
    //     })
    // }, []);

    //redux hooks
    //useSelector就是用来将数据交给组件的
    const {newAlbums} = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);
    const dispatch = useDispatch();

    const carouselRef = useRef();
    useEffect(() => {
        dispatch(getNewAlbumsAction());
    }, [dispatch]);

    return (
        <AlbumWrapper>
            <JCRecommendTitle title="新碟上架"/>
            <div className="content">
                <div className="arrow arrow-left sprite_02" 
                    onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel ref={carouselRef} dots={false}>
                        {
                        [0, 1].map(item => {
                            return (
                            <div key={item} className="page">
                                {
                                newAlbums.slice(item*5, (item+1)*5).map(item => {
                                    return (
                                    <JCAlbumCover key={item.id} info={item}/>
                                    )
                                })
                                }
                            </div>
                            )
                        })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02"
                    onClick={e => carouselRef.current.next()}>
                </div>
            </div>
        </AlbumWrapper>
    )
})

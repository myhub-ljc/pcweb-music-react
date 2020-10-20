import React, { memo } from 'react';

//组件
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  ContentLeft,
  ContentRight
} from './styled';

export default memo(function JCAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/" className="logo sprite_01"></a>
        </ContentLeft>
        <ContentRight>right</ContentRight>
      </div>
      <div className="divider"></div>
      {/* <NavLink to='/'>发现</NavLink>
      <NavLink to='/mine'>我的音乐</NavLink>
      <NavLink to='/friend'>朋友</NavLink> */}
    </HeaderWrapper>
  )
})

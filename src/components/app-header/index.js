//第三方
import React, { memo } from 'react';

import { HeaderLists } from '@/common/local-data.js';

//组件
import { NavLink } from 'react-router-dom';
// import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './styled';

export default memo(function JCAppHeader() {

  const ShowSelectItem = ((item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link} exact={true}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  })

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              HeaderLists.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {ShowSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户"/>
          <div className="center">创作者中心</div>
          <div>登陆</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

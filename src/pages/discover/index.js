import React, { memo, useEffect } from 'react';

import { dicoverMenu } from '@/common/local-data.js';
import {
  DiscoverWrapper,
  TopMenu
} from './style.js';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import request from '@/services/request.js';

export default memo(function JCDiscover(props) {
  const { route } = props;

  //在这里使用useEffect这个hook发起网络请求
  useEffect(() => {
    request({
      url: "/banner"
    }).then(res => {
      console.log(res);
    })
  })

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
        {
          dicoverMenu.map((item, index) => {
            return (<div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>)
          })
        }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

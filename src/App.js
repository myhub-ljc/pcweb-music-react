//第三方库
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

//工具类
import routes from './router';

//组件类
import JCAppHeader from '@/components/app-header';
import JCAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <HashRouter>
      <JCAppHeader/>
      {renderRoutes(routes)}
      <JCAppFooter/>
    </HashRouter>
  )
})

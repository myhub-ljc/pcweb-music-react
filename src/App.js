//第三方库
import React, { memo } from 'react';
//我们需要通过provider把store共享出去
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

//工具类
import routes from './router';
import store from './store';

//组件类
import JCAppHeader from '@/components/app-header';
import JCAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <JCAppHeader/>
      {renderRoutes(routes)}
      <JCAppFooter/>
      </HashRouter>
    </Provider>
  )
})

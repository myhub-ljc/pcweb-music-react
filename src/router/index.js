import React from 'react';
import { Redirect } from 'react-router-dom';

import JCDiscover from '@/pages/discover';
import JCMine from '@/pages/mine';
import JCFriend from '@/pages/friend';

import JCAlbum from '@/pages/discover/children_pages/album';
import JCDjradio from '@/pages/discover/children_pages/djradio';
import JCRecommend from '@/pages/discover/children_pages/recommend';
import JCRanking from '@/pages/discover/children_pages/ranking';
import JCSongs from '@/pages/discover/children_pages/songs';
import JCArtist from '@/pages/discover/children_pages/artist';

//记住别又把component写成components了(崩溃了)
const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='./discover'/>
    )
  },
  {
    path: '/discover',
    component: JCDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend'/>
        )
      },
      {
        path: "/discover/recommend",
        component: JCRecommend
      },
      {
        path: "/discover/ranking",
        component: JCRanking
      },
      {
        path: "/discover/songs",
        component: JCSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: JCDjradio
      },
      {
        path: "/discover/artist",
        component: JCArtist
      },
      {
        path: "/discover/album",
        component: JCAlbum
      },
    ]
  },
  {
    path: '/mine',
    component: JCMine
  },
  {
    path: '/friend',
    component: JCFriend
  }
];

export default routes;
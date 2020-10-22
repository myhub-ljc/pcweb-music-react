import JCDiscover from '@/pages/discover';
import JCMine from '@/pages/mine';
import JCFriend from '@/pages/friend';

//记住别又把component写成components了(崩溃了)
const routes = [
  {
    path: '/',
    exact: true,
    component: JCDiscover
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
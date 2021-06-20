import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const deploy: AppRouteModule = {
  path: '/deploy',
  name: 'Deploy',
  component: LAYOUT,
  redirect: '/deploy/task',
  meta: {
    icon: 'carbon:deploy',
    title: t('routes.deploy.deploy'),
  },
  children: [
    {
      path: 'app',
      name: 'AppPage',
      component: () => import('/@/views/project/deploy/app/index.vue'),
      meta: {
        title: t('routes.deploy.app'),
      },
    },
    {
      path: 'request',
      name: 'RequestPage',
      component: () => import('/@/views/project/deploy/request/index.vue'),
      meta: {
        title: t('routes.deploy.request'),
      },
    },
  ],
};

export default deploy;

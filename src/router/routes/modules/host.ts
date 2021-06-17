import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const host: AppRouteModule = {
  path: '/host',
  name: 'Host',
  component: LAYOUT,
  redirect: '/host/index',
  meta: {
    icon: 'clarity:host-group-solid',
    title: t('routes.host.host'),
  },
  children: [
    {
      path: 'index',
      name: 'HostPage',
      component: () => import('/@/views/project/host/index.vue'),
      meta: {
        icon: 'clarity:host-group-solid',
        title: t('routes.host.host'),
      },
    },
  ],
};

export default host;

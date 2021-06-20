import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  orderNo: 13,
  menu: {
    name: t('routes.deploy.deploy'),
    path: '/deploy',
    children: [
      {
        path: 'app',
        name: t('routes.deploy.app'),
      },
      {
        path: 'request',
        name: t('routes.deploy.request'),
      },
    ],
  },
};
export default menu;

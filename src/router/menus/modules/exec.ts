import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  orderNo: 12,
  menu: {
    name: t('routes.exec.exec'),
    path: '/exec',
    children: [
      {
        path: 'task',
        name: t('routes.exec.task'),
      },
      {
        path: 'template',
        name: t('routes.exec.template'),
      },
    ],
  },
};
export default menu;

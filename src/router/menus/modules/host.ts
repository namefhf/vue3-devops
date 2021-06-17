import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  orderNo: 11,
  menu: {
    name: t('routes.host.host'),
    path: '/host/index',
  },
};
export default menu;

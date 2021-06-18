import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const exec: AppRouteModule = {
  path: '/exec',
  name: 'Exec',
  component: LAYOUT,
  redirect: '/exec/task',
  meta: {
    icon: 'bx:bx-terminal',
    title: t('routes.exec.exec'),
  },
  children: [
    {
      path: 'task',
      name: 'TaskPage',
      component: () => import('/@/views/project/exec/task/index.vue'),
      meta: {
        title: t('routes.exec.task'),
      },
    },
    {
      path: 'template',
      name: 'TemplatePage',
      component: () => import('/@/views/project/exec/task/index.vue'),
      meta: {
        title: t('routes.exec.template'),
      },
    },
  ],
};

export default exec;

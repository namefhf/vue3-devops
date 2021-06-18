import { Icon } from './Icon';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,
  Input,
  Space,
  Modal,
  Form,
  Select,
  Row,
  Col,
} from 'ant-design-vue';

import { App } from 'vue';

const compList = [Icon, AntButton.Group];

export function registerGlobComp(app: App) {
  compList.forEach((comp) => {
    app.component(comp.name || comp.displayName, comp);
  });

  app.use(Input).use(Space).use(Modal).use(Form).use(Select).use(Row).use(Col).use(Button);
}

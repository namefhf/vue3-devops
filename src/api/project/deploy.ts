import { defHttp } from '/@/utils/http/axios';
enum Api {
  App = 'app/',
  Request = 'request/',
}
export interface appModel {
  desc: string;
  id: number;
  key: string;
  name: string;
  sort_id: number;
}

interface requestModel {
  name: String;
  app_name: String;
  env_name: String;
  extra: [];
  status_alias: String;
  created_by_user: String;
  created_at: String;
}
export function appApi() {
  return defHttp.get<appModel[]>({
    url: Api.App,
  });
}
export function requestApi() {
  return defHttp.get<requestModel>({
    url: Api.Request,
  });
}

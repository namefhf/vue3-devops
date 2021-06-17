import { defHttp } from '/@/utils/http/axios';
enum Api {
  Host = '/host/',
}
interface hostModel {
  hosts: [];
  perms: [];
  zones: [];
}
export function hostApi() {
  return defHttp.get<hostModel>({
    url: Api.Host,
  });
}

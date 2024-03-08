import appApi from '@/configs/app-api';

const login = (params) => {
  return appApi.post(`/api/auth/login`, params);
}

const changePassword = (params) => {
  return appApi.put(`/api/auth/change-password`, params);
}

export { login, changePassword };

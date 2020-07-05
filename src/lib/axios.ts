import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import qs from 'query-string';
import { notification } from 'antd';
import * as Cookies from 'js-cookie';
import { configEnv } from 'util/configFile';

const requestInterceptor = (config: AxiosRequestConfig) => {
  config.headers = {
    Authorization:
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
    'X-Access-Token':
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
  };
  console.log(config);
  return config;
};

const errorInterceptor = (err: AxiosError) => {
  const { response } = err;
  if (response) {
    const { status, data } = response;
    notification.error({
      message: `Status: ${status}`,
      description: `Message: ${data.message}`,
      duration: 8,
    });
  }
  throw err;
};

/**
 * Axios instance with error handler
 * 
 * const instance = axios.create({
    baseURL: '/api',
    timeout: 60000,
    headers: {
        Authorization: Cookies.get('token'),
    },
    paramsSerializer: params => {
        return qs.stringify(params);
    },
});
 */

const instance = axios.create({
  baseURL: '/game/v1', // configEnv.configFile.BASEURL,
  timeout: 60000,
  headers: {
    Authorization:
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
    'X-Access-Token':
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

/**
 * Axios instance ignoring error handler
 */
const instanceIgnore = axios.create({
  baseURL: '/game/v1', // configEnv.configFile.BASEURL,
  timeout: 60000,
  headers: {
    Authorization:
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
    'X-Access-Token':
      sessionStorage.getItem('STORE_AGENT') === null
        ? ''
        : JSON.parse(sessionStorage.getItem('STORE_AGENT') || '').AccessToken,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

instance.interceptors.response.use((response) => response, errorInterceptor);
instance.interceptors.request.use(requestInterceptor);
instanceIgnore.interceptors.request.use(requestInterceptor);

export { instance as handle, instanceIgnore as ignore };
export default instance;

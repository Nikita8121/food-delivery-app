import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE, API_TOKEN } from '@env';

export const apiInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    'content-Type': 'application/json',
    Authorization: 'Bearer ' + API_TOKEN,
  },
});

/* const parseError = (data) => {
  return data;
}; */

/* apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const _response = error.response || {} || error;
    if (_response.status >= 400) {
      throw new Error(parseError(_response.data));
    }
    return _response;
  }
);
 */

const api = {
  get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // extract the individual parameters

      // finally execute the GET request with axios:
      apiInstance
        .get(url, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  },
  post<T>(
    url: string,
    payload: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // finally execute the GET request with axios:
      apiInstance
        .post(url, payload, options)
        .then((response: any) => {
          resolve(response.data.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  },
  put<T>(
    url: string,
    payload: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // finally execute the GET request with axios:
      apiInstance
        .put(url, payload, options)
        .then((response: any) => {
          resolve(response.data.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  },
  patch<T>(
    url: string,
    payload: unknown,
    options?: AxiosRequestConfig
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // finally execute the GET request with axios:
      apiInstance
        .patch(url, payload, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  },
  delete<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // extract the individual parameters

      // finally execute the GET request with axios:
      apiInstance
        .delete(url, options)
        .then((response: any) => {
          resolve(response.data as T);
        })
        .catch((response: any) => {
          reject(response);
        });
    });
  },
};

export default api;

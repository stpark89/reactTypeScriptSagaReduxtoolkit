import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { HttpResponseStatus } from "models/HttpResponseStatus";

const defaultAxiosConfig: AxiosRequestConfig = {
  timeout: 60 * 1000,
};

let createConfig = (): AxiosRequestConfig => ({
  ...defaultAxiosConfig,
});

export const setupToken = (token: string): void => {
  createConfig = (): AxiosRequestConfig => ({
    ...defaultAxiosConfig,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const createAxiosClient = (): AxiosInstance => {
  const client: AxiosInstance = axios.create(createConfig());
  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (!error || !error.response) {
        throw error;
      }
      if (error.response.status === HttpResponseStatus.Unauthorized) {
        document.location.replace(
          `/landing?status=${HttpResponseStatus.Unauthorized}`
        );
      }
    }
  );
  return client;
};

export default createAxiosClient;

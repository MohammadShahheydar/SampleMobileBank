import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";
import * as process from "process";

const configHeaders = () => {
    const header: Record<string, string | undefined> = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
    }

    return header
}

const createApiInstance = (options: {
    withCredentials?: boolean
}) => {
    const api = axios.create({
        baseURL: process.env.BASE_DOMAIN,
        withCredentials: options.withCredentials,
        headers: configHeaders()
    });

    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            return config;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response: AxiosResponse<any , any>) => {
            return response;
        },
        (error: any) => {
            return Promise.reject(error);
        }
    );

    return api;
};

export const baseApi = () => createApiInstance({
    withCredentials: true,
})

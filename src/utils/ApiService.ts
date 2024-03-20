import axios, {AxiosInstance, AxiosResponse} from 'axios';
import JwtService from '../utils/JwtService';

class ApiService {
    private static instance: AxiosInstance;

    public static init() {
        ApiService.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        ApiService.instance.interceptors.request.use(
            (config) => {
                const token = JwtService.getToken();
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    public static async query(
        resource: string,
        params: any
    ): Promise<AxiosResponse> {
        return await ApiService.instance.get(resource, {params});
    }

    public static async get(
        resource: string,
        slug = ''
    ): Promise<AxiosResponse> {
        return await ApiService.instance.get(`${resource}/${slug}`);
    }

    public static async post(
        resource: string,
        params: any
    ): Promise<AxiosResponse> {
        return await ApiService.instance.post(resource, params);
    }

    public static async update(
        resource: string,
        slug: string,
        params: any
    ): Promise<AxiosResponse> {
        return await ApiService.instance.put(`${resource}/${slug}`, params);
    }

    public static async put(
        resource: string,
        params: any
    ): Promise<AxiosResponse> {
        return await ApiService.instance.put(resource, params);
    }

    public static async delete(
        resource: string
    ): Promise<AxiosResponse> {
        return await ApiService.instance.delete(resource);
    }

}

export default ApiService;
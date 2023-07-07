import axios, { AxiosResponse } from 'axios';
import { Data } from '../interfaces/data.interface';


export const api = axios.create({
    baseURL: `https://us-central1-prueba-front-280718.cloudfunctions.net/`,
});


class MaterialsService {
    async getAberturas(): Promise<Data[] | undefined> {
        try {
            const response:AxiosResponse<any, any> = await api.get(`/aberturas/`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async getEquipamiento(): Promise<Data[] | undefined> {
        try {
            const response:AxiosResponse<any, any> = await api.get(`/equipamiento/`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }

    async getTerminaciones(): Promise<Data[] | undefined> {
        try {
            const response:AxiosResponse<any, any> = await api.get(`/equipamiento/`);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    }
}


const materialsService = new MaterialsService();
export default materialsService;
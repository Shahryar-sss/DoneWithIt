import { create } from "apisauce";
import cache from "../utility/cache";
import storage from "../auth/storage";

const apiClient = create({
    baseURL: "http://192.168.0.101:9000/api",
    timeout: 20000,
});

apiClient.addAsyncRequestTransform(async (request) => {
    try {
        const authToken = await storage.getToken();
        if (!authToken) return;
        request.headers["x-auth-token"] = authToken;
    } catch (e) {
        console.log("Error adding token to request header", e);
    }
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

export default apiClient;

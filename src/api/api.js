import { create } from "apisauce";
import authStorage from "../auth/storage";

const api = create({
    baseURL: "http://192.168.1.18/api",
    headers: {
        Accept: "application/json",
    },
});

api.addAsyncRequestTransform(async (request) => {
    const auth = await authStorage.getAuth();
    if (!auth) return;
    request.headers["Authorization"] = "Bearer " + auth.token;
});

export default api;

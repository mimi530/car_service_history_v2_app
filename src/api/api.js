import { create } from "apisauce";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const api = create({
    baseURL: settings.apiUrl,
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

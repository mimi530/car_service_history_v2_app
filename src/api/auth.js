import api from "./api";

const login = (email, password) => api.post("/auth/login", { email, password });

const register = (userInfo) => api.post("/auth/register", userInfo);

export default {
    login,
    register,
};

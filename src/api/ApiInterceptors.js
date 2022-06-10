import React, { useEffect } from "react";
import useAuth from "../auth/useAuth";
import api from "./api";

const ApiInterceptors = () => {
    const { logOut } = useAuth();

    useEffect(() => {
        api.axiosInstance.interceptors.response.use(
            function (response) {
                return response;
            },
            function (error) {
                if (error.response.status === 401) {
                    logOut();
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return null;
};

export default ApiInterceptors;

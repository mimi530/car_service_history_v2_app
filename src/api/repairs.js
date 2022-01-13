import api from "./api";

const getRepairs = (car) => api.get(`/cars/${car.uuid}/repairs`);

const addRepair = (car, repair) => {
    return api.post(`/cars/${car.uuid}/repairs`, repair);
};

const deleteRepair = (car, repair) => api.delete(`/cars/${car.uuid}/repairs/${repair.uuid}`);

const editRepair = (car, repair, data) => api.put(`/cars/${car.uuid}/repairs/${repair.uuid}`, data);

export default {
    getRepairs,
    addRepair,
    deleteRepair,
    editRepair,
};

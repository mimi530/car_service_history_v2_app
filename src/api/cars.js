import api from "./api";

const getCars = () => api.get('/cars');

const addCar = (car) => api.post('/cars', car);

const deleteCar = (car) => api.delete("/cars/" + car.uuid);

const editCar = (car, data) => api.put("/cars/" + car.uuid, data);

export default {
    getCars,
    addCar,
    deleteCar,
    editCar,
};

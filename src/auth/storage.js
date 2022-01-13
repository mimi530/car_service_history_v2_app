import * as SecureStore from "expo-secure-store";

const storeAuth = async (auth) => {
    try {
        await SecureStore.setItemAsync("user", JSON.stringify(auth));
    } catch (error) {
        console.log("Error storing auth user", error);
    }
};

const getAuth = async () => {
    try {
        const auth = await SecureStore.getItemAsync("user");
        return JSON.parse(auth);
    } catch (error) {
        console.log("Error getting auth user", error);
    }
};

const removeAuth = async () => {
    try {
        await SecureStore.deleteItemAsync("user");
    } catch (error) {
        console.log("Error removing auth user", error);
    }
};

export default { storeAuth, getAuth, removeAuth };

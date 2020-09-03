import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (e) {
        console.log("Error storing the auth token", e);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (e) {
        console.log("Error geting the auth token", e);
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? JwtDecode(token) : null;
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.log("Error removing the auth token", e);
    }
};

export default {
    storeToken,
    getToken,
    getUser,
    removeToken,
};

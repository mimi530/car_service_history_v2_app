import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import { AppLoading } from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";
import OfflineNotice from "./src/components/OfflineNotice";
import ApiInterceptors from "./src/api/ApiInterceptors";

export default function App() {
    const [user, setUser] = useState();

    const restoreUser = async () => {
        const auth = await authStorage.getAuth();
        if (auth) setUser(auth.user);
    };

    useEffect(() => {
        restoreUser();
    }, []);

    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                <ApiInterceptors />
                <NavigationContainer theme={navigationTheme}>
                    {user ? <AppNavigator /> : <AuthNavigator />}
                </NavigationContainer>
                <OfflineNotice />
            </AuthContext.Provider>
        </>
    );
}

const styles = StyleSheet.create({});

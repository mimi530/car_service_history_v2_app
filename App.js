import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import { AppLoading } from "expo";
import AppNavigator from "./src/navigation/AppNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";

export default function App() {
    const [user, setUser] = useState();
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const auth = await authStorage.getAuth();
        if (auth) setUser(auth.user);
    };
    //not working :/
    // if (!isReady)
    //     return (
    //         <AppLoading
    //             startAsync={restoreUser}
    //             onFinish={() => setIsReady(true)}
    //         />
    //     );
    useEffect(() => {
        restoreUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({});

import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        authStorage.removeAuth();
    };

    const logIn = (auth) => {
        setUser(auth.user);
        authStorage.storeAuth(auth);
    };

    return { user, logOut, logIn };
};

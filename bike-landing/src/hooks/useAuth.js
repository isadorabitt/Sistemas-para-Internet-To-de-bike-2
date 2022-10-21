import { useContext } from "react";
import { AuthContext } from "../../node_modules/auth";

const useAuth = () => {
    return  useContext(AuthContext);
}

export default useAuth;
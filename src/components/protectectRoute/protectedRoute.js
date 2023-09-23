import { Navigate } from "react-router-dom";
import { useValue } from "../buybusyContent/BuybusyContent";
const Protected = ({children }) => {
    const {isLoggedIn} = useValue();
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default Protected;
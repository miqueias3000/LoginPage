import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PassUpdate from "../pages/PassUpdate";
import DashBord from "../pages/DashBord";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/PassUpdate" element={<PassUpdate />} />
                <Route path="/dashboard" element={<DashBord />} /> {/* Corrija o path para '/dashboard' */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

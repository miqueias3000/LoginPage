import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PassUpdate from "../pages/PassUpdate";
import Register from "../pages/Register";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/PassUpdate" element={<PassUpdate />} />
                <Route  path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

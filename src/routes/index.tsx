import { Routes, Route } from "react-router-dom"
import { PageHome, PageAdm, PageLayout, PageList, PageCadastro, PageLogin } from "../pages/index"
import ProtectedRoute from "./ProtectedRoute"

export const RouteSoftware = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="Lista" element={<PageList />} />
                <Route path="Cadastro" element={<PageCadastro />} />
                <Route path="Login" element={<PageLogin />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/Adm" element={<PageAdm />} />
                </Route>
            </Route>
        </Routes>
    );
};
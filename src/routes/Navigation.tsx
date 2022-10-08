import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CoordinatesFull } from "../interfaces/types";
import { HomePage } from "../pages/HomePage";
import { LocationPage } from "../pages/LocationPage";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage /> } />
                <Route path={'/location/:location'} element={<LocationPage /> } />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

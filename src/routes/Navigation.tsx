import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Aside } from "../components/aside";
import { CoordinatesFull } from "../interfaces/types";

interface Props {
    coordinates: CoordinatesFull | undefined;
}

export const Navigation: React.FC<Props> = ({ coordinates }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Aside coordinates={coordinates} /> } />
                <Route path={'/location/:location'} element={<Aside coordinates={coordinates} /> } />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

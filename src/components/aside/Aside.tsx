import { useState } from "react"
import { CoordinatesFull } from "../../interfaces/types";
import { AsideInfo } from "./AsideInfo";
import { Searcher } from "./Searcher";

interface Props {
    coordinates: CoordinatesFull | undefined;
}

export const Aside: React.FC<Props> = ({ coordinates }) => {

    const [open, setOpen] = useState(false);


    return (
        <aside className="h-screen bg-[#242539] lg:sticky lg:top-0 lg:box-border">
            <button
                className={open ? 'hidden' : 'bg-slate-600 p-2 rounded-md text-white font-bold mt-3 ml-3'}
                onClick={() => setOpen(!open)}
            >
                Buscar un lugar
            </button>
            <Searcher open={open} setOpen={setOpen} />
            <AsideInfo open={open} coordinates={coordinates} />
        </aside>
    )
}

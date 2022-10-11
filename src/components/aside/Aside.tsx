import { useState } from "react"
import { AsideInfo } from "./AsideInfo";
import { Searcher } from "./Searcher";
import { CoordinatesFull } from "../../interfaces/types";
import ubicationIcon from "../../assets/ubication-icon.svg";
import { useNavigate } from "react-router-dom";

interface Props {
    coordinates: CoordinatesFull | undefined;
}

export const Aside: React.FC<Props> = ({ coordinates }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <aside className="h-screen bg-[#242539] lg:sticky lg:top-0 lg:box-border">
            <div className={open ? 'hidden' : "flex justify-between items-center p-4"}>
                <button
                    className='bg-slate-600 p-2 rounded-md text-white font-bold'
                    onClick={() => setOpen(!open)}
                >
                    Buscar un lugar
                </button>
                <button
                    className='bg-slate-600 p-2 rounded-full text-white font-bold'
                    onClick={() => {
                        navigate('/')
                        navigate(0)
                    }}
                >
                    <img src={ubicationIcon} alt="" />
                </button>
            </div>
            <Searcher open={open} setOpen={setOpen} />
            <AsideInfo open={open} coordinates={coordinates} />
        </aside>
    )
}

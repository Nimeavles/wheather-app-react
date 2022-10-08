import { useContext, useState} from "react"
import { UbicationContext } from "../../context"
import { CoordinatesFull } from "../../interfaces/types";
import { AsideInfo } from "./AsideInfo";
import { Searcher } from "./Searcher";

interface Props {
    coordinates: CoordinatesFull | undefined;
}

export const Aside: React.FC<Props> = ({ coordinates }) => {

    const { ubication } = useContext(UbicationContext);
    const [open, setOpen] = useState(false);


    return (
        <aside className="h-screen bg-[#242539]">
            <Searcher open={ open } setOpen={ setOpen }/>
            <AsideInfo open={ open } coordinates={ coordinates }/>
        </aside>
    )
}

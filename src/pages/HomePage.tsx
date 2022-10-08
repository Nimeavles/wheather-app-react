import { useContext, useState, useEffect } from "react";
import { Aside } from "../components/aside"
import { Spinner } from "../components/layout/Spinner";
import { UbicationContext } from "../context";
import { CoordinatesFull } from "../interfaces/types";

export const HomePage = () => {

    const { getUbicationOnPageLoad, getActualTime } = useContext(UbicationContext);
    const [coordinates, setCoordinates] = useState<CoordinatesFull>()

    useEffect(() => {
        const coordinates = getUbicationOnPageLoad();
        setTimeout(async () => {
            const data = await getActualTime(coordinates);
            setCoordinates(data);
        }, 1000)
    }, [])

    return (
        <>
            {
                coordinates ? (
                    <Aside coordinates={coordinates} />
                ) : <Spinner />
            }
        </>
    )
}

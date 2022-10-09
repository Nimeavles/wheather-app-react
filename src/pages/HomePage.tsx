import { useContext, useState, useEffect } from "react";
import { Aside } from "../components/aside"
import { Spinner } from "../components/layout/Spinner";
import { WeekWheather } from "../components/WeekWheather/WeekWheather";
import { State, UbicationContext } from "../context";
import { CoordinatesFull } from "../interfaces/types";

export const HomePage = () => {

    const { getUbicationOnPageLoad, getActualTime } = useContext(UbicationContext);
    const [coordinates, setCoordinates] = useState<CoordinatesFull>()
    const [currentPosition, setCurrentPosition] = useState<State>() 

    useEffect(() => {
        const currentPosition = getUbicationOnPageLoad();
        setCurrentPosition(currentPosition);
        setTimeout(async () => {
            const data = await getActualTime(currentPosition);
            setCoordinates(data);
        }, 1000)
    }, [])

    return (
        <>
            {
                coordinates ? (
                    <>
                        <Aside coordinates={coordinates} />
                        <WeekWheather coordinates={ currentPosition }/>
                    </>
                ) : <Spinner />
            }
        </>
    )
}

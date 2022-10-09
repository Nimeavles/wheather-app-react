import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Aside } from "../components/aside"
import { Spinner } from "../components/layout/Spinner"
import { WeekWheather } from "../components/WeekWheather/WeekWheather"
import { CoordinatesFull } from "../interfaces/types"
import { getDataFromApi } from "../utils"

export const LocationPage = () => {

    const { location } = useParams();
    const [coordinates, setCoordinates] = useState<CoordinatesFull>();

    const fetchDataWithQuery = async (endpoint: string) => {
        const request = await getDataFromApi(endpoint);
        setCoordinates(request.data);
    }

    useEffect(() => {
        fetchDataWithQuery(`/weather?q=${location}`);
    }, [])

    return (
        <>
            {
                coordinates ? (
                    <>                    
                        <Aside coordinates={coordinates} /> 
                        <WeekWheather place={ location }/>
                    </>
                ) : <Spinner />
            }
        </>
    )
}

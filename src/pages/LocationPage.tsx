import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Aside } from "../components/aside"
import { DayHightlights } from "../components/hightlights/DayHightlights"
import { Footer } from "../components/layout/Footer"
import { PageLayout } from "../components/layout/PageLayout"
import { Spinner } from "../components/layout/Spinner"
import { WeekWheather } from "../components/WeekWheather/WeekWheather"
import { State, UbicationContext } from "../context"
import { CoordinatesFull } from "../interfaces/types"
import { getDataFromApi } from "../utils"

export const LocationPage = () => {

    const { location } = useParams();
    const [coordinates, setCoordinates] = useState<CoordinatesFull>();
    const [currentPosition, setCurrentPosition] = useState<State>();
    const { getUbicationOnPageLoad } = useContext(UbicationContext);

    const fetchDataWithQuery = async (endpoint: string) => {
        const request = await getDataFromApi(endpoint);
        setCoordinates(request.data);
    }

    useEffect(() => {
        const currentPosition = getUbicationOnPageLoad();
        setCurrentPosition(currentPosition);
        fetchDataWithQuery(`/weather?q=${location}`);
    }, [])

    return (
        <>
            {
                coordinates ? (
                    <>
                        <div className="lg:grid lg:grid-cols-[37%_1fr] dsk:grid-cols-[30%_1fr] lg:grid-rows-[1fr_5%]">
                            <Aside coordinates={coordinates} />
                            <PageLayout>
                                <main className="bg-[#00001d]">
                                    <WeekWheather coordinates={currentPosition} />
                                    <DayHightlights data={coordinates} />
                                </main>
                            </PageLayout>
                        </div>
                        <Footer />
                    </>
                ) : <Spinner />
            }
        </>
    )
}

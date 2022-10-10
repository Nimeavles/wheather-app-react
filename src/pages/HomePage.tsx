import { useContext, useState, useEffect } from "react";
import { Aside } from "../components/aside"
import { DayHightlights } from "../components/hightlights/DayHightlights";
import { Footer } from "../components/layout/Footer";
import { PageLayout } from "../components/layout/PageLayout";
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

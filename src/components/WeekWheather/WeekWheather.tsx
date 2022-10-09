import { useContext, useEffect, useState } from "react";
import { State, UbicationContext } from "../../context";
import { List, WeekWheatherType } from "../../interfaces/types";
import { getDataFromApi } from "../../utils";
import { getDays } from "../../utils/getDays";
import { WheatherDay } from "./WheatherDay";

interface Props {
    coordinates?: State | undefined;
    place?: string
}

export const WeekWheather: React.FC<Props> = ({ coordinates, place = "" }) => {

    const [data, setData] = useState<WeekWheatherType>()

    const fecthWeekWheather = async (endpoint: string) => {
        const result = await getDataFromApi(endpoint);
        setData(result.data);
    }

    const randomWhetherIcon = {
        0: '10d',
        1: '09d',
        2: '13d',
        3: '01d',
        4: '01d',
        5: '01d',
        6: '02d',
    }

    useEffect(() => {
        if (place) {
            fecthWeekWheather(`/forecast?q=${place}&cnt=7`)
        }else {
            fecthWeekWheather(`/forecast?lat=${coordinates?.lat}&lon=${coordinates?.lon}&cnt=7`)
        }
    }, [])

    return (
        <section className="min-h-screen bg-[#00003f] grid grid-cols-2 place-items-center">
            {
                data && data.list.map((day: List, index: number) => {

                    const randomNumber = Math.floor(Math.random() * 7)
                    const arrayRandom = Object.values(randomWhetherIcon);
                    const date = getDays(index);

                    return <WheatherDay
                        icon={arrayRandom[randomNumber]}
                        key={index}
                        max={Math.round(day.main.temp_max)}
                        min={Math.round(day.main.temp_min)}
                        date={date}
                    />
                }
                )
            }
        </section>
    )
}

import { CoordinatesFull } from "../../interfaces/types";
import ubicationIcon from '../../assets/ubication-icon.svg';

interface Props {
    coordinates: CoordinatesFull | undefined;
    open: boolean;
}

export const AsideInfo: React.FC<Props> = ({ coordinates, open }) => {

    const getDay = () => {
        let options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        };
        return String(new Date().toLocaleDateString('es-ES', options));
    }

    return (
        <div className={ open ? "hidden" : "flex flex-col items-center h-[calc(100vh-60px)]"}>
            <img
                src={`http://openweathermap.org/img/wn/${coordinates?.weather[0].icon}@4x.png`}
                className='mt-5'
                alt="icon"
            />

            <div className="flex flex-col items-center justify-evenly h-56 mt-20">
                <div className="flex items-end">
                    <p className="text-8xl font-bold text-white">
                        {Math.round(Number(coordinates?.main.temp))}
                    </p>
                    <p className="text-6xl text-slate-500">ºC</p>
                </div>

                <h2 className="capitalize font-medium text-xl text-slate-600">{ getDay() }</h2>

                <span className="flex items-center text-slate-600 font-medium text-[1.2rem]">
                    <img className="h-4 w-4 mr-1" src={ ubicationIcon } alt="icon" />
                    <p>{ coordinates?.name }</p>
                </span>
            </div>
        </div>
    )
}

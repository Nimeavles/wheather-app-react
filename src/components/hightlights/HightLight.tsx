interface Props {
    wind: number;
    humidity: number;
    visibility: number;
    pressure: number;
}

export const HightLight: React.FC<Props> = ({ wind, humidity, visibility, pressure }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <article className="min-w-[100px] lg:min-w-[250px] px-4 py-6 bg-slate-900 rounded-md flex flex-col items-center justify-around">
                <h4 className="text-semibold text-white">Viento</h4>
                <span className="text-white flex items-end">
                    <p className="text-4xl font-extrabold">{wind}</p>
                    <p className="text-xl ml-1">Km/h</p>
                </span>
            </article>

            <article className="min-w-[250px] px-4 py-6 bg-slate-900 rounded-md flex flex-col items-center justify-around">
                <h4 className="text-semibold text-white">Humedad</h4>
                <span className="text-white flex items-center">
                    <p className="text-4xl font-extrabold">{humidity}</p>
                    <p className="text-xl ml-1">%</p>
                </span>
            </article>

            <article className="min-w-[250px] px-4 py-6 bg-slate-900 rounded-md flex flex-col items-center justify-around">
                <h4 className="text-semibold text-white">Visibilidad</h4>
                <span className="text-white flex items-center">
                    <p className="text-4xl font-extrabold">{visibility}</p>
                    <p className="text-xl ml-1">millas</p>
                </span>
            </article>

            <article className="min-w-[250px] px-4 py-6 bg-slate-900 rounded-md flex flex-col items-center justify-around">
                <h4 className="text-semibold text-white">Presión del Aire</h4>
                <span className="text-white flex items-center">
                    <p className="text-4xl font-extrabold">{pressure}</p>
                    <p className="text-xl ml-1">mb</p>
                </span>
            </article>
        </div>
    )
}

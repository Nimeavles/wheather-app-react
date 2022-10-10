interface Props {
    date: string;
    icon: string;
    max: number;
    min: number;
}

export const WheatherDay: React.FC<Props> = ({ date, icon, max, min}) => {
  return (
    <article className="lg:mt-9 bg-slate-900 flex flex-col max-w-[70%] justify-between p-4 rounded-md">
        <h3 className="capitalize text-white font-medium m-auto">
            { date }
        </h3>

        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />

        <span className="flex justify-around">
            <p className="text-white">{ max }ºC</p>
            <p className="text-slate-600">{ min }ºC</p>
        </span>
    </article>
  )
}

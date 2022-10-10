import { CoordinatesFull } from "../../interfaces/types"
import { HightLight } from "./HightLight"

interface Props {
  data: CoordinatesFull
}

export const DayHightlights: React.FC<Props> = ({ data }) => {
  return (
    <div className="m-auto max-w-[90%]">
      <section className="min-h-[80vh] lg:min-h-[40%]">
        <h3 className="text-white font-semibold text-lg my-5">
          Características Meteorológicas
        </h3>

        <HightLight 
          humidity={ Math.round(data.main.humidity) }
          pressure={ Math.round(data.main.pressure) }
          visibility={ Math.round(data.visibility) }
          wind={ Math.round(data.wind.speed) }
        />
      </section>
    </div>
  )
}

import { ReactNode, useState } from "react"
import { WeekWheatherType } from "../interfaces/types";
import { getCurrentUbication, getDataFromApi } from "../utils";
import { UbicationContext } from "./"

interface Props {
  children: ReactNode;
}

export interface State {
  lat?: number;
  lon?: number;
}

export const UbicationProvider: React.FC<Props> = ({ children }) => {

  const [ubication, setUbication] = useState<State>({});

  const getUbicationOnPageLoad = () => {
    const coordinates = getCurrentUbication()
    setUbication(coordinates);
    return coordinates;
  };

  const getActualTime = async (coordinates: State) => {
    const request = await getDataFromApi(`/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`);
    return request.data
  }

  return (
    <UbicationContext.Provider value={{
      ubication,
      getUbicationOnPageLoad,
      getActualTime,
    }}>
      {children}
    </UbicationContext.Provider>
  )
}

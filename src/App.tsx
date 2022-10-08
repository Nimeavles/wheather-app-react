import { useContext, useEffect, useState } from "react";
import { UbicationContext } from "./context";
import { CoordinatesFull } from "./interfaces/types";
import { Spinner } from "./components/layout/Spinner";
import { Navigation } from "./routes/Navigation";

const App = () => {

  const { getUbicationOnPageLoad, getActualTime } = useContext(UbicationContext);
  const [coordinates, setCoordinates] = useState<CoordinatesFull>()

  useEffect(() => {
    const coordinates = getUbicationOnPageLoad();
    setTimeout(async () => {
      const data = await getActualTime(coordinates);
      setCoordinates(data);
    }, 1000)
  }, [])

  return (
    <div className="app min-h-screen">
      {
        coordinates ? <Navigation coordinates={ coordinates }/> : <Spinner /> 
      }
    </div>
  )
}

export default App;

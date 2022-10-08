import { useContext, useEffect, useState } from "react";
import { UbicationContext } from "./context";
import { CoordinatesFull } from "./interfaces/types";
import { Spinner } from "./components/layout/Spinner";
import { Navigation } from "./routes/Navigation";

const App = () => {

  return (
    <div className="app min-h-screen">
      <Navigation />
    </div>
  )
}

export default App;

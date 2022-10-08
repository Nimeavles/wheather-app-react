import { createContext } from 'react';
import { State } from '.';


interface ContextProps {
    ubication: State;
    getUbicationOnPageLoad: () => State;
    getActualTime: (coordinates: State) => Promise<any>;
}

export const UbicationContext = createContext({} as ContextProps);
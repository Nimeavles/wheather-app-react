import { State } from "../context";

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

const Ubication: State = {}

const success = (pos: GeolocationPosition) => {
    Ubication.lat = pos.coords.latitude;
    Ubication.lon = pos.coords.longitude;
};

const error = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
};

export const getCurrentUbication = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
    return Ubication;
} 

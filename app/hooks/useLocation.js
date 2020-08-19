import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;

            const {
                coords: { latitude, longitude },
            } = await Location.getLastKnownPositionAsync();
            setLocation({ latitude, longitude });
        } catch (e) {
            console.log("Something went wrong while getting the location", e);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

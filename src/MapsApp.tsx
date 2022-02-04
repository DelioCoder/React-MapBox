import { BtnMyLocation } from './components';
import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './screens';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
                <BtnMyLocation />
            </MapProvider>
        </PlacesProvider>   
    )
};

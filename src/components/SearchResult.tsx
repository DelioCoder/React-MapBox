import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from '../interfaces/places';

export const SearchResult = () => {

    const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );

    const { map, getRouteBetweenPoints } = useContext( MapContext );

    const [activeId, setActiveId] = useState('');

    const onPlaceClicked = ( place: Feature ) => {
        setActiveId( place.id );
        map?.flyTo({
            zoom: 14,
            center: place.center as [ number, number ]
        });
    }

    const getRoute = ( place: Feature ) => {
        if ( !userLocation ) return;
        const [ lng, lat ] = place.center;
        getRouteBetweenPoints( userLocation, [ lng, lat ] )
    }

    if ( isLoadingPlaces ) {
        return (
            <div className="alert alert-primary mt-2">
                <h6>Buscando</h6>
                <p>Espere por favor...</p>
            </div>
        )
    }
    
    if ( places.length === 0 ) {
        return <></>
    }

    return (
        <ul className="list-group mt-3 overflow-auto" style={{ height: '30rem' }}>

        {
            places.map( place => (
                <li
                    key={ place.id }
                    className={`list-group-item list-group-item-action pointer ${ activeId === place.id ? 'active' : '' }`}
                    onClick={() => onPlaceClicked( place )}
                >
                    <h6>{ place.text_es }</h6>
                    <p
                        className={`${ activeId === place.id ? 'text-white' : 'text-muted' }`}
                        style={{
                            fontSize: '12px'
                        }}
                    >
                        { place.place_name }
                    </p>

                    <button
                        onClick={() => getRoute( place )}
                        className={`btn btn-sm ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' } `}
                    >
                        Direcciones
                    </button>
                </li>
            ))
        }
        </ul>
    )
};

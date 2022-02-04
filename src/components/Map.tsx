import { useContext, useLayoutEffect, useRef } from "react";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import mapboxgl from '!mapbox-gl';
import { MapContext, PlacesContext } from '../context';
import { Loading } from ".";

export const Map = () => {

    const { isLoading, userLocation } = useContext( PlacesContext );
    const { setMap } = useContext( MapContext );
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        if ( !isLoading ) {
            const map = new mapboxgl.Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14 // starting zoom
            });
            setMap( map );
        }

    }, [ isLoading ]);

    if ( isLoading ) {
        return ( <Loading /> )
    }

    return (
      <div
        ref={ mapDiv }
        style={{
            height: '100vh',
            width: '100vw',
            top: 0,
            left: 0,
            position: 'fixed'
        }}
        >
          {
              userLocation?.join(',')
          }
      </div>
  );
};

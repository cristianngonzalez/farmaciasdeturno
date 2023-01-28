import { useMemo } from 'react';
import { GoogleMap , useLoadScript , Marker } from "@react-google-maps/api";

import './MapComponent.css';

export default function MapComponent(){

   const {isLoaded} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA_ZYKLA17T1Qeui1UwvMFqJvhEwXkbupA',
   })


   if(!isLoaded){
      return <>Cargando el mapa...</>
   }

   return(
      <>


         <GoogleMap 
            zoom={10} 
            center={{lat: 44 , lng: -80}} 
            mapContainerClassName="mapContainer"
         ></GoogleMap>
      </>
   )
}
























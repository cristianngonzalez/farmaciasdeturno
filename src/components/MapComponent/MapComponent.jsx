import { useMemo } from 'react';
import { GoogleMap , useLoadScript , Marker } from "@react-google-maps/api";

export default function MapComponent(){

   const {isLoaded} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA_ZYKLA17T1Qeui1UwvMFqJvhEwXkbupA',
   })


   if(!isLoaded){
      return <>Cargando el mapa...</>
   }

   return(
      <>

         <div className='mapContainer'></div>

         <GoogleMap 
            zoom={10} 
            center={{lat: 44 , lng: -80}} 
            mapContainerClassName="mapContainer"
         ></GoogleMap>
      </>
   )
}
























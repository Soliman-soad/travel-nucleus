import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Place = () => {
    const placeData = useLoaderData()
    const[name,setName] =useState(1)
    const currentPlace = placeData.find(place => place.id === name);
    
    return (
        <div className=' bg-no-repeat  bg-cover bg-origin-content sm:bg-none ease-in duration-200  align-center ' style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${currentPlace.img_url})`}}>
            
            <div className='pt-28 grid grid-cols-3'>
            {
                placeData.map(place => {
                    return(
                            <div key={place.id} className="m-2   ">
                                <div onClick={()=>setName(place.id)} className="w-80 h-96 hover:border-4 ease-in duration-100 relative bg-cover rounded-lg bg-base-100 shadow-xl image-full" style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.07), rgba(0,0,0,.5) ), url(${place.img_url})`}}>
                                    <h4 className='absolute bottom-0 text-white font-bold text-xl mx-5 my-3'>{place.place}</h4>
                                </div>
                            </div>
                    )
                })
            }
            </div>
            
            
        
        </div>
    );
};

export default Place;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const placeData = useLoaderData()
    const[name,setName] =useState(1)
    const [show,setShow] = useState(false);
    const currentPlace = placeData.find(place => place.id === name);
    const slide = document.getElementById('slider')
    const slideLeft = () => {
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    const slideRight = () =>{
        slide.scrollLeft = slide.scrollLeft + 500;
    }
    return (
        <div className=' bg-no-repeat h-screen bg-cover bg-origin-content sm:bg-none ease-in duration-200' style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${currentPlace.img_url})`}}>
            <div className='md:grid grid-cols-2 justify-center items-center pt-24 sm:mx-auto'>
            <div  className='flex flex-col'>
                <h1 className='text-5xl m-10 text-white mx-auto font-bold ease-in duration-200 md:block hidden'>{currentPlace.place}</h1>
                <button className='btn btn-outline text-white hover:bg-white mx-auto hover:text-gray-900'>Book now</button>
            </div>
            <div>
            <div id='slider' className= {`grid grid-cols-1 align-center md:flex hidden md:block overflow-x-scroll w-full h-full scrollbar-hide `} >
            {
                placeData.map(place => {
                    return(
                            <div key={place.id} className="m-2   ">
                                <div onClick={()=>setName(place.id)} className="w-80 h-96 hover:border-4 ease-in duration-200 relative bg-cover rounded-lg bg-base-100 shadow-xl image-full" style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.07), rgba(0,0,0,.5) ), url(${place.img_url})`}}>
                                    <h4 className='absolute bottom-0 text-white font-bold text-xl mx-5 my-3'>{place.place}</h4>
                                </div>
                            </div>
                    )
                })
            }
            
            </div>
            </div>
            </div>
            <div className="btn-group w-full mt-10">
            <div className='mx-auto'>
            <button onClick={ slideLeft} className="btn btn-outline text-white hover:bg-white hover:text-gray-900">Previous</button>
            <button onClick={ slideRight} className="btn btn-outline text-white hover:bg-white hover:text-gray-900">Next</button>
            </div>
            </div>
            
        </div>
    );
};

export default Home;
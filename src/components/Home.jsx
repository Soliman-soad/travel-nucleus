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
        <div className=' bg-no-repeat h-screen bg-cover bg-origin-content ease-in duration-200' style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${currentPlace.img_url})`}}>
            <div className='grid grid-cols-2 items-center pt-24'>
            <div >
                <h1 className='text-5xl text-white m-10 font-bold ease-in duration-200'>{currentPlace.place}</h1>
            </div>
            <div>
            <div id='slider' className= {`flex overflow-x-scroll w-full h-full scrollbar-hide `} >
            {
                placeData.map(place => {
                    return(
                            <div key={place.id} className="m-2 hover:border-4 ease-in duration-200 ">
                                <div onClick={()=>setName(place.id)} className="w-80 h-96 relative bg-cover rounded-lg bg-base-100 shadow-xl image-full" style={{backgroundImage: ` linear-gradient( rgba(0,0,0,.07), rgba(0,0,0,.5) ), url(${place.img_url})`}}>
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
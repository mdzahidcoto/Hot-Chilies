import React from 'react';
import img1 from '../../../Resources/red-onion/images/adult-blur-blurred-background-687824.png';
import img2 from '../../../Resources/red-onion/images/chef-cook-food-33614.png';
import img3 from '../../../Resources/red-onion/images/architecture-building-city-2047397.png';

const Footer = () => {
    const image = [
        {src: img1, cause: 'Cause Details', details: 'other details'},
        {src: img2, cause: 'Cause Details', details: 'other details'},
        {src: img3, cause: 'Cause Details', details: 'other details'}
    ];

    return (
        <div className='mx-auto my-4 px-10 py-4'>
            <h2 className='text-xl font-semibold font-serif'>Why you choose us</h2>
            <p className='text-xs pl-4'>some details</p>
            <p className='text-xs pl-4'>some details</p>
            <div className='grid gap-4 grid-cols-3 mt-4'>
            {
                image.map((e) =>{
                    return (
                        <div className=' h-72 mx-auto'>
                            <div className=' grid grid-rows-2 p-2'>
                                <div className='h-44'>
                                    <img src={e.src} className='h-44' alt='' />
                                </div>
                                <div className='h-20'>
                                    <h1>{e.cause}</h1>
                                   <p className='text-xs'>{e.details}</p>
                                   <p className='text-xs'>{e.details}</p>
                                   <p className='text-xs'>{e.details}</p>
                                </div>
                            </div>
                        </div>
                    );     
                })
            }
            </div>   
        </div>
    );
};

export default Footer;
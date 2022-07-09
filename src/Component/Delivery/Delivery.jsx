import React from 'react';
import { ShopDataContext } from '../../Context/ShopContext';
import logo from '../../Resources/red-onion/images/Group 1151.png'
// import Map from './Map';

const Delivery = () => {
    const { deliveryAddress } = ShopDataContext();
    const { b_name, flat, road } = deliveryAddress;
    const handleContact = async (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    return (
        <div className='grid gap-x-6 gap-y-3 grid-cols-2 px-auto py-20 h-full w-full'>
            <div className='p-10 mx-auto my-5 h-96 w- flex justify-center items-center'>
                {
                    // <Map />
                }
                <p>Here will be the map</p>
            </div>
            <div className='flex mr-10 rounded-lg bg-gray-200'>
                <div className=' px-6 py-8'>
                    <img src={logo} className='h-14 w-14' alt='' />
                <div className='w-full border rounded-lg h-36 mx-auto my-4 bg-white'>
                    <div className='flex'>
                        <p className='w-3 h-3 m-2 rounded-full bg-red-400'></p>
                        <p>location from</p>
                    </div>
                    <div className='h-12 border-l-4 ml-3'></div>
                    <div className='flex'>
                        <p className='w-3 h-3 m-2 rounded-full bg-red-400'></p>
                        <p>To {road}</p>
                    </div>
                </div>
                <div> <h1 className='text-lg'>Time: 9:30pm</h1></div>
                <div className='w-full border rounded-lg h-14 my-4'>
                    <div className='flex bg-white rounded-md'>
                       <div><img className='w-8 h-8 m-2 rounded full' src={logo} alt='' /></div>
                       <div className='ml-2'>
                            <p>{b_name}</p>
                            <p className='text-xs'>{flat}</p>
                        </div>
                    </div> 
                </div>

                <div className=''>
                    
                    <button onClick={handleContact} className='bg-red-400 px-10 text-white font-serif py-2 my-5 rounded-lg'>Contact</button>
                </div>
            </div>
            </div>
        </div>
        )
};

export default Delivery;
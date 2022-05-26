import React from 'react';

const MyOrder = ({orderdItem, handleDelete}) => {
    const {_id, img, name, price, quantity} = orderdItem;
    const newQuantity = parseInt(quantity);
    const totalPrice = newQuantity * price;

    return (
        <div className='flex items-center border rounded-xl px-4 py-2 my-4 justify-between shadow-lg'>
            <div className="flex flex-4 items-center justify-between">
                <div className='flex items-center mr-6'>
                    <div className="w-20 h-20 rounded-full border mr-2">
                      <img className='w-[100%] h-auto' src={img} alt={name}/>
                    </div>
                    <div>
                        <p className='font-semibold'>{name}</p>
                        <p className='font-semibold'>Per piece price: ${price}</p>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div>
                    <p className='font-semibold'>Quantity: {quantity}</p>
                    <p className='font-semibold'>Total Price ${totalPrice}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-800 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <button className='btn px-6 ml-2 bg-green-600 border-none text-white'>Pay</button>
            </div>
        </div>
    );
};

export default MyOrder;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurcessModal = ({modalProducts, setModalProducts}) => {
    const {name, price, img} = modalProducts;
    // console.log(product);

    // // Get User Details from firebase 
    const [user] = useAuthState(auth);

    const addProductServer = event =>{
        event.preventDefault()
        const userName = user.displayName;
        const userEmail = user.email;
        const quantity = event.target.quantity.value;
        if(quantity < 100){
            return alert('please add 100+ itms becouse its wholesale market')
        }
        const userPhone = event.target.user_phone.value;
        const orderdedUserData = {name, userName, userEmail, price, quantity, userPhone, img};


        fetch('http://localhost:5000/user-orderd-data',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderdedUserData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.success){
                toast('Added product your Order Page')
            }
            else{
                toast.error('All ready you added this product')
            }
            setModalProducts({});
        })

    }
    return (
        <div>
            <div>
                <input type="checkbox" id="wholeSale_modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box relative">
                    <label htmlFor="wholeSale_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h2 className='text-center text-2xl font-bold'>Please Added Product</h2>
                        <p className='text-center mb-4'>If You added product after that go to my order page and pay</p>
                        <form onSubmit={addProductServer}>
                            <input name='product_name' disabled type="text" value={name} className="input w-full input-bordered mb-2" readOnly/>
                            <input name='user_name' disabled type="text" value={user?.displayName} className="input w-full input-bordered mb-2" readOnly/>
                            <input name='user_email' disabled type="text" value={user?.email} className="input w-full input-bordered mb-2" readOnly/>
                            <input name='user_email' disabled type="text" value={img} className="input w-full input-bordered mb-2 input-sm" readOnly/>
                            <input name='price' disabled type="text" value={price} className="input w-full input-bordered mb-2" readOnly/>
                            <input name='quantity' type="number" placeholder="Type Quantity (minimum 100)" className="input w-full input-bordered mb-2" />
                            <input name='user_phone' type="number" placeholder="Type Your Phone Number" className="input w-full input-bordered mb-2" />
                            <div className='mb-2'>
                            <button type='submit' htmlFor="wholeSale_modal" className="btn btn-sm capitalize float-right mb-2">Added</button>
                            </div>
                        </form>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default PurcessModal;
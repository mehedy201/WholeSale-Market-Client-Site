import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurcessModal = ({addedForModal}) => {
    const {name, price} = addedForModal;

    // Get User Details from firebase 
    const [user] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="wholeSale_modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative">
                <label htmlFor="wholeSale_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-center text-2xl font-bold'>Please Added Product</h2>
                    <p className='text-center mb-4'>If You added product after that go to my order page and pay</p>
                    <form>
                        <input disabled type="text" value={name} className="input w-full input-bordered mb-2" readOnly required/>
                        <input disabled type="text" value={user?.displayName} className="input w-full input-bordered mb-2" required/>
                        <input disabled type="text" value={user?.email} className="input w-full input-bordered mb-2" required/>
                        <input type="number" placeholder="Type Quantity (minimum 100)" className="input w-full input-bordered mb-2" />
                        <input type="number" placeholder="Type Your Phone Number" className="input w-full input-bordered mb-2" />
                        <label htmlFor="wholeSale_modal" className="btn btn-sm capitalize float-right">Added</label>
                    </form>
              </div>
            </div>
        </div>
    );
};

export default PurcessModal;
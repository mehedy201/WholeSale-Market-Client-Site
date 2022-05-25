import React from 'react';

const PurcessModal = ({addedForModal}) => {
    const {name, price} = addedForModal;
    return (
        <div>
            <input type="checkbox" id="wholeSale_modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative">
                <label htmlFor="wholeSale_modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-center text-2xl font-bold'>Please Added Product</h2>
                    <p className='text-center mb-4'>If You added product after that go to my order page and pay</p>

                    <input type="text" value={name} className="input w-full input-bordered mb-2" readOnly/>
                    <input type="text" placeholder="Type here" className="input w-full input-bordered mb-2" />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered mb-2" />
                    <input type="text" placeholder="Type here" className="input w-full input-bordered mb-2" />


                <div className="modal-action">
                  <label htmlFor="wholeSale_modal" className="btn btn-sm capitalize">Added</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default PurcessModal;
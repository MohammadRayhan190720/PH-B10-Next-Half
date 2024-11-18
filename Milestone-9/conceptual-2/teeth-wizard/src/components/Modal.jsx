import React from 'react';

const Modal = () => {

  const handleSubmit = e =>{
    e.preventDefault;
  }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
   
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Frist Name</span>
                </label>
                <input
                  type="text"
                  name='fname'
                  placeholder="Frist Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name='lname'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="phone"
                  placeholder="Phone Number"
                  name='phone'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name='date'
                  className="input input-bordered"
                  required
                />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="address"
                  name='address'
                  placeholder='address'
                  className="input input-bordered"
                  required
                />

              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Make Appoinment</button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
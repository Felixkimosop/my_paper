import React from "react";

function Landingpage() {
  return (
    <>
      <div className="landing">
        <div className="land flex-1">
          <div className="typo">
            <h1>
              Timely Custom Paper Writing <br />
              Help At Your Service
            </h1>
            <p>
              Get the best academic paper writing <br />
              services from our best professional paper writers. <br />
              Join the bandwagon and get 15% <br />
              discount with coupon codeWELCOME15
            </p>
            <div className="button">
              <button class="btn btnn btn-blue">Button</button>
              <button class="btn btnn btn-blue">Button</button>
            </div>
          </div>
          <div className="forms">
            <div class="w-full max-w-xs form">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 forming">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Academic Level
                </label>
                <input
                  placeholder="High school"
                  type="text"
                  className="shadow appearance-none border border-black-500 rounded "
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Type Of paper
                </label>
                <input
                  placeholder="Essay"
                  type="text"
                  className="shadow appearance-none border border-black-500 rounded w-full"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Deadline
                </label>
                <input
                  placeholder="30 days"
                  type="text"
                  className="shadow appearance-none border border-black-500 rounded w-full"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Number of pages
                </label>
                <input
                  placeholder="2 pages"
                  type="text"
                  className="shadow appearance-none border border-black-500 rounded w-full"
                />
                <p>$10.00</p>
                <button className="formbtn">Order Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;

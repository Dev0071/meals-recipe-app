import React from 'react';
// import { AppContext } from '../context';
// import { useContext } from 'react';
import { useGlobalContext } from '../context';

function Meals() {
  const context = useGlobalContext();
  console.log(context);
  return (
    <section className="bg-gray-100  ">
      <div className="flex flex-wrap py-8 px-[6rem] gap-[3rem] ">
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
        <div className="flex flex-col h-[19rem]  rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out">
          <div className="object-cover">
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="food"
            />
          </div>
          <div className="flex justify-between py-6 px-6 bg-white">
            <p>meals name</p>
            icon
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meals;

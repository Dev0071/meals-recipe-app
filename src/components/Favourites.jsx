import React from 'react';

const Favourites = () => {
  return (
    <section className="bg-black text-white py-[1rem] px-[4rem]">
      <h2>Favourites</h2>
      <div className="mt-[1.5rem]">
        <div className="h-17 w-20 rounded-full overflow-hidden ring-4 ">
          <img
            src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="food-image"
          />
        </div>
        <button className="ml-[1rem] mt-3  text-sm transition duration-700 ease-in-out hover:text-red-500">
          remove
        </button>
      </div>
    </section>
  );
};

export default Favourites;

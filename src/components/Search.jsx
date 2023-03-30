import React from 'react';

const Search = () => {
  return (
    <section className="px-[1rem] py-[1rem] flex gap-[2rem]  md:px-[4rem] md:py-[2rem]">
      <input
        type="text"
        placeholder="type favourite meal"
        className=" rounded-sm bg-gray-100 px-2 py-1 text-sm md:w-[14rem]"
      />
      <button
        type="submit"
        className="bg-blue-500 text-sm text-white px-2 py-1 rounded-sm"
      >
        Search
      </button>
      <button
        type="submit"
        className="bg-blue-200 text-sm  px-2 py-1 rounded-sm font-medium"
      >
        Surprise me
      </button>
    </section>
  );
};

export default Search;

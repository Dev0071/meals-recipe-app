import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
  };

  const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeal();
  };

  return (
    <header>
      <form
        className="px-[1rem] py-[1rem] flex gap-[2rem]  md:px-[4rem] md:py-[2rem]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="type favourite meal"
          className=" rounded-sm bg-gray-100 px-2 py-1 text-sm md:w-[14rem]"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-sm text-white px-2 py-1 rounded-sm transition duration-700 hover:bg-blue-400"
        >
          Search
        </button>
        <button
          type="submit"
          className="bg-blue-200 text-sm  px-2 py-1 rounded-sm font-medium duration-700 hover:bg-blue-400"
          onClick={() => handleRandomMeal}
        >
          Surprise me
        </button>
      </form>
    </header>
  );
};

export default Search;

import React from 'react';
import { useGlobalContext } from '../context';

const Favourites = () => {
  const [favourites, removeFromFavorites] = useGlobalContext();
  return (
    <section className="bg-black text-white py-[1rem] px-[4rem]">
      <h2>Favourites</h2>
      {favourites.map((meal) => {
        const { idMeal: id, strMealThumb: image } = meal;
        return (
          <article key={id} className="mt-[1.5rem]">
            <div className="h-17 w-20 rounded-full overflow-hidden ring-4 ">
              <img src={image} alt="food-image" />
            </div>
            <button
              className="ml-[1rem] mt-3  text-sm transition duration-700 ease-in-out hover:text-red-500"
              onClick={() => removeFromFavorites(id)}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Favourites;

import React from 'react';
// import { AppContext } from '../context';
// import { useContext } from 'react';
import { useGlobalContext } from '../context';
import Loader from './Loader';

function Meals() {
  const { isLoading, meals } = useGlobalContext();
  const defaultImg =
    '"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"';
  console.log(meals);
  if (isLoading) return <Loader />;

  return (
    <section className="bg-gray-100  ">
      <div className="flex  gap-[1.5rem] px-[1.5rem] flex-wrap py-6 md:px-[5rem] md:gap-[2rem] md:py-8">
        {meals.map((meal) => {
          const { strmeal: name, idMeal: id, strMealThumb: image } = meal;
          return (
            <article
              key={id}
              className="flex flex-col h-[19rem]   rounded-lg overflow-hidden shadow-lg w-[22rem] cursor-pointer hover:skew-x-2 transition duration-700 ease-in-out"
            >
              <div>
                <img className src={image} alt="food" />
              </div>
              <div className=" bg-white">
                <p>{name}</p>
                icon
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Meals;

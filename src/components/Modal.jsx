import React from 'react';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <aside className="modal-overlay">
      <div className="modal-container bg-white">
        <img
          src={image}
          className="h-[10rem] w-full  object-cover"
          alt={title}
        />
        <div className="flex p-8 flex-col">
          <h4 className="text-2xl">{title}</h4>
          <p className="mt-3 mb-2 text-gray-600 text-lg">Cooking Intruction</p>
          <p className="leading-loose text-gray-500 mb-2">{text}</p>
          <a href={source} target="_blank" className="text-blue-500 underline">
            Original Source
          </a>
          <button
            className="text-white bg-red-700 py-2 rounded-lg mt-6"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

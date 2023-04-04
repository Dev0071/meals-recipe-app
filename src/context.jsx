import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const allmealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMeal = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      // console.log(data?.data.meals);
      data.meals ? setMeals(data.meals) : setMeals([]);
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchMeal(allmealsUrl);
  }, []);

  useEffect(() => {
    fetchMeal(`${allmealsUrl}${searchTerm}`);
  }, [searchTerm]);

  const fetchRandomMeal = () => {
    fetchMeal(randomMeal);
  };

  const selectMeal = (idMeal) => {
    let meal = meals.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        meals,
        isLoading,
        setSearchTerm,
        showModal,
        fetchRandomMeal,
        selectMeal,
        selectedMeal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

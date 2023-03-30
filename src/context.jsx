import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const allmealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeal = async (url) => {
    try {
      const data = await axios.get(url);
      // console.log(data?.data.meals);
      setMeals(data?.data.meals);
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchMeal(allmealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

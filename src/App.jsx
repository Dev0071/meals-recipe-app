import React from 'react';
import Search from './components/Search';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Favourites from './components/Favourites';
import { useGlobalContext } from './context';

const App = () => {
  const { showModal, favourites } = useGlobalContext();

  return (
    <>
      <Search />
      {favourites.length > 0 && <Favourites />}
      <Meals />
      {showModal && <Modal />}
    </>
  );
};

export default App;

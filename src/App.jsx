import React from 'react';
import Search from './components/Search';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Favourites from './components/Favourites';

const App = () => {
  return (
    <>
      <Search />
      <Favourites />
      <Meals />
      {/* <Modal /> */}
    </>
  );
};

export default App;

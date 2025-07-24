import React from 'react';
import { View, } from 'react-native';
import SearchWithFavourite from '../components/SearchWithFavouriteAndNotifi';
import Categories from '../components/CategoriesMenu';
// import SearchBar from '../components/SearchBar';
// import FavouriteIcon from '../components/FavIcon';

const HomeScreen = () => {
  return (
    <View>
      {/* <SearchBar /> */}
      {/* <FavouriteIcon /> */}
      <SearchWithFavourite />
      <Categories />

    </View>
  );
};

export default HomeScreen;
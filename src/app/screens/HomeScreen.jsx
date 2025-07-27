import React, { useState } from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchWithFavourite from '../components/SearchWithFavouriteAndNotifi';
import Categories from '../components/CategoriesMenu';
import Slider from './Slider';
import PromoBoxesUI from '../components/PromoBoxesUI';
import FlashSaleUI from '../components/FlashSaleUI';
import BestSellersUI from '../components/BestSellersUI';
import AddressShow from '../components/AddressShow';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
      <AddressShow/>
      
      <SearchWithFavourite onSearch={setSearchText} />

      <ScrollView>
        <Categories />
        <Slider />
        <PromoBoxesUI />
        <FlashSaleUI searchQuery={searchText} />
        <BestSellersUI searchQuery={searchText} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
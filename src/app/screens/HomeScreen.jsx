import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchWithFavourite from '../components/SearchWithFavouriteAndNotifi';
import Categories from '../components/CategoriesMenu';
import Slider from '../components/Slider';
import PromoBoxesUI from '../components/PromoBoxesUI';
import FlashSaleUI from '../components/FlashSaleUI';
import BestSellersUI from '../components/BestSellersUI';
import AddressShow from '../components/AddressShow';
import ProductsListing from '../components/ProductsListing';
import { footwearItems, jackets } from '../data/Products';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
      <AddressShow />
      <SearchWithFavourite onSearch={setSearchText} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Slider />
        <PromoBoxesUI />
        <FlashSaleUI searchQuery={searchText} />
        <BestSellersUI searchQuery={searchText} />

        <View style={styles.dealContainer}>
          <View style={styles.section}>
            <Text style={styles.heading}>Men's Jackets</Text>
            <ProductsListing
              data={jackets}/>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Footwear's Deal</Text>
            <ProductsListing
              data={footwearItems}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dealContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomeScreen;

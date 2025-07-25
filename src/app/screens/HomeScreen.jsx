import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import SearchWithFavourite from '../components/SearchWithFavouriteAndNotifi';
import Categories from '../components/CategoriesMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content'/>
        <SearchWithFavourite />
        <Categories />
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

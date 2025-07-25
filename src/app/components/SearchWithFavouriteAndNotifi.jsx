import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import FavouriteIcon from './FavIcon';
import Notification from './Notification';

const SearchWithFavourite = ({ onSearch, onFavoritePress, onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
      <View style={styles.icons}>
        <FavouriteIcon onFavoritePress={onFavoritePress} />
        <Notification onNotificationPress={onNotificationPress} />
      </View>
    </View>
  );
};

export default SearchWithFavourite;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

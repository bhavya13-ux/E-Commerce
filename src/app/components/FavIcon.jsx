import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const FavouriteIcon = ({ onFavoritePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onFavoritePress}>
      <Image
        source={require('../assets/icons/FavIcon.png')}
        style={styles.favIcon}
      />
    </TouchableOpacity>
  );
};

export default FavouriteIcon;

const styles = StyleSheet.create({
  favIcon: {
    width: 24,
    height: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

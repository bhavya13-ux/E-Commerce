import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const jackets = [
  {
    id: '1',
    name: 'Winter Jacket',
    price: '₹1999',
    image: require('../assets/icons/MensJacket.jpeg'),
  },
  {
    id: '2',
    name: 'Leather Jacket',
    price: '₹2499',
    image: require('../assets/icons/MensJacket.jpeg'),
  },
  {
    id: '3',
    name: 'Hooded Jacket',
    price: '₹1799',
    image: require('../assets/icons/MensJacket.jpeg'),
  },
  {
    id: '4',
    name: 'Bomber Jacket',
    price: '₹2299',
    image: require('../assets/icons/MensJacket.jpeg'),
  },
];

const favoriteImg = require('../assets/icons/FavIcon.png'); 
const favoriteSelectedImg = require('../assets/icons/FavIcon.png');

const MensJacket = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => {
    const isFavorite = favorites.includes(item.id);

    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => toggleFavorite(item.id)}
        >
          <Image
            source={isFavorite ? favoriteSelectedImg : favoriteImg}
            style={styles.favoriteImage}
          />
        </TouchableOpacity>

        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={jackets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width / 2 - 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyNowBtn: {
    backgroundColor: '#FF6347',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  cartBtn: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  favoriteImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default MensJacket;

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const bestSellers = [
  {
    id: '1',
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: '₹1,299',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/61G5JoU9tTL._SL1500_.jpg',
  },
  {
    id: '2',
    name: 'Smartwatch',
    category: 'Wearables',
    price: '₹2,499',
    rating: 4.4,
    image: 'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SL1500_.jpg',
  },
  {
    id: '3',
    name: 'Office Chair',
    category: 'Furniture',
    price: '₹3,999',
    rating: 4.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7fhAlB2C8KUUdD5OeoYqxn4p1BZEqsc4og&s',
  },
  {
    id: '4',
    name: 'T-shirt Combo Pack',
    category: 'Fashion',
    price: '₹699',
    rating: 4.2,
    image: 'https://www.jiomart.com/images/product/original/rv5suomgvx/smartees-pack-of-5-combo-tshirt-for-men-product-images-rv5suomgvx-0-202310061049.jpg?im=Resize=(500,630)',
  },
];

const BestSellersUI = ({ searchQuery = '' }) => {
  const filteredItems = bestSellers.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Best Sellers</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BestSellersUI;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  viewAll: {
    fontSize: 14,
    color: '#007bff',
  },
  card: {
    width: 140,
    marginHorizontal: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 6,
    resizeMode: 'cover',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
    color: '#333',
  },
  category: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
});

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const flashSaleItems = [
  { id: '1', name: "Men's Jacket", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwfUotOAp49H2AiyFgkTAu4mRXj2qyrZnZA&s', price: '₹799', discount: '20% OFF' },
  { id: '2', name: 'Sneakers', image: 'https://media.voguebusiness.com/photos/60140c47d3d19b7432dd2ea9/2:3/w_2560%2Cc_limit/sneakers-sustainability-voguebus-janine-abrenilla-jan-21-story.jpg', price: '₹999', discount: '30% OFF' },
  { id: '3', name: 'Smart Watch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3hh7e09hqvCovp4cWbSvma-poE4l6OgWXg&s', price: '₹1,499', discount: '15% OFF' },
  { id: '4', name: 'Bluetooth Headphones', image: 'https://www.boat-lifestyle.com/cdn/shop/products/main2_b66dce6b-710d-49cb-9d1c-2bc8c9c0ab15.png?v=1645698328', price: '₹1,299', discount: '25% OFF' },
  { id: '5', name: "Women's Handbag", image: 'https://images.meesho.com/images/products/283008181/zz5np_512.webp', price: '₹699', discount: '35% OFF' },
  { id: '6', name: 'Fitness Tracker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOgQg27tWbpnNBHqQjzj0PtQOHpDJ22xztQ&s', price: '₹999', discount: '18% OFF' },
  { id: '7', name: 'Sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/grey-gradient-gunmetal-full-rim-rectangle--square-vincent-chase-livewire-vc-s14507-m-c2-sunglasses__dsc0249_30_04_2024.jpg', price: '₹499', discount: '40% OFF' },
  { id: '8', name: 'Wireless Earbuds', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7ohMR3Pge0DlS3ywY7Wy6o5t6Ljp3svmIA&s', price: '₹1,199', discount: '22% OFF' },
  { id: '9', name: 'Leather Wallet', image: 'https://m.media-amazon.com/images/I/81WIcyHQ7oL._UY1100_.jpg', price: '₹399', discount: '30% OFF' },
  { id: '10', name: 'Casual T-Shirt', image: 'https://via.placeholder.com/100', price: '₹299', discount: '50% OFF' },
];

const FlashSaleUI = ({ searchQuery = '' }) => {
  const filteredItems = flashSaleItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔥 Flash Sale</Text>
      <FlatList
        horizontal
        data={filteredItems}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlashSaleUI;

const styles = StyleSheet.create({
  container: { padding: 14, backgroundColor: '#fff' },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  list: { gap: 10 },
  card: {
    width: 120,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: { fontSize: 12, fontWeight: '600', textAlign: 'center' },
  price: { fontSize: 13, color: '#2e7d32', marginTop: 4 },
  discount: { fontSize: 11, color: '#d32f2f', fontWeight: 'bold' },
});

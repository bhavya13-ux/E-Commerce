import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyCartItems = [
  {
    id: '1',
    name: 'Dressar Women Floral Print',
    size: 'S, Lemon',
    rating: 4.1,
    reviews: 11292,
    price: 287,
    originalPrice: 1999,
    discount: 85,
    image: require('../assets/icons/Products/Floral_Frock.png'),
    delivery: 'Jul 31, Thu',
  },
  {
    id: '2',
    name: 'KJFAB Men Shirt',
    size: 'M, Olive',
    rating: 3.9,
    reviews: 3909,
    price: 358,
    originalPrice: 699,
    discount: 48,
    image: require('../assets/icons/Products/Mens_shirt.png'),
    delivery: 'Aug 1, Fri',
  },
  {
    id: '3',
    name: "Women's BrookLyn Low Wedges",
    size: '6, Cream',
    rating: 3.9,
    reviews: 3909,
    price: 358,
    originalPrice: 699,
    discount: 48,
    image: require('../assets/icons/Products/Sandal.png'),
    delivery: 'Aug 1, Fri',
  },
  {
    id: '4',
    name: "Samsung A14",
    size: '6, Cream',
    rating: 3.9,
    reviews: 3909,
    price: 358,
    originalPrice: 699,
    discount: 48,
    image: require('../assets/icons/Products/SamsungA14.png'),
    delivery: 'Aug 1, Fri',
  },
];

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <ScrollView>
        {dummyCartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.subText}>Size: {item.size}</Text>
                <Text style={styles.rating}>⭐ {item.rating} ({item.reviews})</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.discount}>↓ {item.discount}% </Text>
                  <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
                  <Text style={styles.finalPrice}> ₹{item.price}</Text>
                </View>
                <Text style={styles.delivery}>Delivery by {item.delivery}</Text>
              </View>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity><Text style={styles.actionBtn}>Remove</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.actionBtn}>Save for later</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.actionBtn}>Buy this now</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ₹650</Text>
        <TouchableOpacity style={styles.orderBtn}>
          <Text style={styles.orderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  subText: {
    color: '#555',
    fontSize: 13,
    marginVertical: 2,
  },
  rating: {
    fontSize: 13,
    marginVertical: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  discount: {
    color: 'green',
    fontSize: 13,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginLeft: 5,
    fontSize: 13,
  },
  finalPrice: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
  },
  delivery: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionBtn: {
    color: '#007bff',
    fontSize: 13,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderBtn: {
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
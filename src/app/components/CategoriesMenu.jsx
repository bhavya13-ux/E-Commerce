import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Mobile', icon: require('../assets/icons/Mobiles.png') },
  { name: 'Appliances', icon: require('../assets/icons/Appliance.png') },
  { name: 'Electronics', icon: require('../assets/icons/Electronics.webp') }, 
  { name: 'Smart Gadgets', icon: require('../assets/icons/SmartGadgets.jpg') },
  { name: 'Home', icon: require('../assets/icons/HomeProduct.jpeg') },
  { name: 'Beauty & Personal Care', icon: require('../assets/icons/Beauty_Care.jpg') },
  { name: 'Toys', icon: require('../assets/icons/Toys.jpg') },
  { name: 'Baby', icon: require('../assets/icons/Baby.jpg') },
  { name: 'Book', icon: require('../assets/icons/Books.webp') },
  { name: 'Food', icon: require('../assets/icons/Food.jpeg') },
  { name: 'HealthCare', icon: require('../assets/icons/HealthCare.png') },
  { name: 'Sport Hub', icon: require('../assets/icons/Sports.jpeg') },
  // { name: 'Auto Accessories', icon: require('../assets/icons/Mobiles.png') },
  { name: 'Furniture', icon: require('../assets/icons/Furniture.jpg') },
  { name: 'Bikes & Scooters', icon: require('../assets/icons/Bikes&Scooter.webp') },
  { name: 'Travel', icon: require('../assets/icons/Travell.jpeg') },
];

const Categories = ({ onCategoryPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => onCategoryPress(item.name)}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label} numberOfLines={1}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginTop: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 80,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
  },
});

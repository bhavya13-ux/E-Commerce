import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Fashion', icon: require('../assets/icons/Fashion.png') },
  { name: 'Electronics', icon: require('../assets/icons/laptop.png') },
  { name: 'Wearables', icon: require('../assets/icons/Smartwatch.png') },
  { name: 'Home', icon: require('../assets/icons/Homekeliye.png')},
  { name: 'Beauty', icon: require('../assets/icons/Beauty.png') },
];

const Categories = ({ onCategoryPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => onCategoryPress(item.name)}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.name}</Text>
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
    width: 70,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight:'400',
  },
});

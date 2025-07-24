import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Fashion', icon: require('../assets/icons/Fashion.png') },
  { name: 'Mobiles', icon: require('../assets/icons/Mobiles.png') },
  { name: 'Electronic', icon: require('../assets/icons/Electronics.png') },
  { name: 'Books & Media', icon: require('../assets/icons/Book&Media.png') },
  { name: 'Sports & Gym', icon: require('../assets/icons/Sports&Gym.png') },
  { name: 'Toys', icon: require('../assets/icons/Toys.png') },
  { name: 'Food & Health', icon: require('../assets/icons/Food&Health.png') },
  { name: 'Home', icon: require('../assets/icons/Homekeliye.png')},
  { name: 'Beauty', icon: require('../assets/icons/Beauty.png') },
  { name: 'Appliances', icon: require('../assets/icons/Appliance.png') },
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
    // backgroundColor: '#fff',
    marginTop: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 70,
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});

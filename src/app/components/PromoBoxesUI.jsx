import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const promoItems = [
  { icon: '🛍️', label: 'Top Deals' },
  { icon: '🆕', label: 'New Arrivals' },
  { icon: '📈', label: 'Trending' },
  { icon: '🌟', label: 'Best Sellers' },
  { icon: '🎧', label: 'Headphones' },
  { icon: '💡', label: 'Ideas' },
];

const PromoBoxesUI = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {promoItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.box}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PromoBoxesUI;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: 80,
    marginHorizontal: 6,
  },
  icon: {
    fontSize: 20,
    marginBottom: 6,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
  },
});

import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Button from './Button';

const ProductCard = ({ product, onPress }) => {
  const imageSource = typeof product.image === 'string' ? { uri: product.image } : product.image;

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={imageSource} style={styles.image} />

        <Text style={styles.title} numberOfLines={1}>
          {product.name}
        </Text>

        <Text style={styles.price}>₹{product.price}</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <Button
          title="Add to Cart"
          onPress={() => console.log(`Add ${product.name} to cart`)}
        />
        <Button
          title="Buy Now"
          onPress={() => console.log(`Buy ${product.name} now`)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 190,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 13,
    color: 'green',
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ProductCard;

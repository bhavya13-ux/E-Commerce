import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductByCategory } from '../data/ProductByCategory';
import ProductCard from '../components/ProductCard';

const CategoryWiseListing = ({ route }) => {
  const { category } = route.params;
  const products = ProductByCategory[category] || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Products for: {category}</Text>
      {products.length === 0 ? (
        <Text style={styles.noProduct}>No products available for this category.</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#222',
  },
  list: {
    paddingBottom: 20,
  },
  noProduct: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
});

export default CategoryWiseListing;

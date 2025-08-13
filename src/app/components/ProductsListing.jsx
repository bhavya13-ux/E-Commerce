import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const ProductsListing = ({ data }) => {
  const renderItem = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductsListing;

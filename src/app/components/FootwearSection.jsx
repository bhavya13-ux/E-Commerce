import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const footwearItems = [
  {
    id: '1',
    name: 'Nike Air Max',
    description: 'Breathable & stylish for running.',
    image:
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/bbe4cb5f-94bd-4008-b03a-423286618b67/NIKE+AIR+MAX+PLUS+PRM.png',
    price: '₹6,999',
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    description: 'Top comfort with Boost technology.',
    image:
      'https://assets.adidas.com/images/w_600,f_auto,q_auto/5c1d8c6c9b61497bbbe24fb429023195_faec/ULTRABOOST_1.0_SHOES_Grey_IE8976_db01_00_standard.tiff.jpg',
    price: '₹8,499',
  },
  {
    id: '3',
    name: 'Puma Sneakers',
    description: 'Perfect everyday casual wear.',
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/386373/01/sv01/fnd/IND/fmt/png',
    price: '₹4,299',
  },
  {
    id: '4',
    name: 'Reebok Running',
    description: 'Designed for training & speed.',
    image:
      'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21821030/2023/3/27/ba9df912-a7be-47d9-81e8-dc5b4abaf9d61679897624231-Reebok-Unisex-Sports-Shoes-7231679897623908-1.jpg',
    price: '₹3,799',
  },
];

const FootwearSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Footwear Deals</Text>
      <FlatList
        data={footwearItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FootwearSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  list: {
    paddingLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    marginRight: 12,
    width: width * 0.45,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  price: {
    color: '#FF5A5F',
    fontSize: 14,
    marginTop: 6,
    fontWeight: 'bold',
  },
});

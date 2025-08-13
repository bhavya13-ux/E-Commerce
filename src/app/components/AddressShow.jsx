import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';


const AddressShow = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.addressDetails}>
        <Text style={styles.title}>Deliver to:</Text>
        <Text style={styles.name}>Bhavya</Text>
        <Text style={styles.address} numberOfLines={2}>
          123, Park Street, Kolkata, West Bengal - 700016
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default AddressShow

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  addressDetails: {
    flex: 1,
  },
  title: {
    color: '#888',
    fontSize: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
  },
  address: {
    fontSize: 13,
    color: '#333',
  },
})

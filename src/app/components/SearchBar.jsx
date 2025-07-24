import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products..."
        placeholderTextColor="#000"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => onSearch(query)}
      />

      <TouchableOpacity onPress={() => onSearch(query)}>
        <Image
          source={require('../assets/icons/SearchIcon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#799EFF',
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: '70%',
    height: 45,
    backgroundColor: '#fff',
    color: '#000',
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    paddingVertical: 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: '#1e3a8a',
    // backgroundColor: '#fff'
  },
});

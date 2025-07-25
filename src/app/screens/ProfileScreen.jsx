import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/icons/Order.png')} // Add your avatar image here
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>Md Okaish</Text>
          <Text style={styles.email}>okaish@example.com</Text>
          <TouchableOpacity>
            <Text style={styles.detailsLink}>See more details →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Options List */}
      <View style={styles.optionList}>
        {[
          'Contact Us',
          'About Us',
          'Cookie Policy',
          'Sale and Refund Policy',
          'FAQs',
          'Change Language',
          'Delete Account',
          'Address',
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  detailsLink: {
    color: '#007bff',
    marginTop: 4,
  },
  optionList: {
    marginTop: 20,
  },
  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
});

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Notification = ({ onNotificationPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onNotificationPress}>
      <Image
        source={require('../assets/icons/NotifiIcon.png')}
        style={styles.bellIcon}
      />
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({
  bellIcon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
});

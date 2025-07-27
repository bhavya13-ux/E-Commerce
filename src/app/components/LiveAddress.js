import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
import Geolocation from 'react-native/Libraries/Utilities/Geolocation';

const NativeLocation = () => {
  const [location, setLocation] = useState(null);

  const requestPermissionAndGetLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestPermissionAndGetLocation();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <Text style={styles.text}>Lat: {location.latitude}, Long: {location.longitude}</Text>
      ) : (
        <ActivityIndicator size="small" />
      )}
    </View>
  );
};

export default NativeLocation;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});

async function requestLocationPermission() {
  if (Platform.OS === 'ios') return true;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
}

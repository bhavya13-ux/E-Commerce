import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const sliderData = [
  { id: '1', image: require('../assets/icons/SliderImg/Slider_1_Fashion.jpg') },
  { id: '2', image: require('../assets/icons/SliderImg/Slider_2_Electronic.webp') },
  { id: '3', image: require('../assets/icons/SliderImg/Slider_3_Beauty.jpg') },
];

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % sliderData.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={sliderData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />

      <View style={styles.dotsContainer}>
        {sliderData.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (i - 1) * width,
              i * width,
              (i + 1) * width
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View key={i} style={[styles.dot, { opacity }]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 10,
  },
  image: {
    height: 190,
    width: width - 10,
    resizeMode: 'cover',
    margin: 5,
    borderRadius: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
});


export default Slider;

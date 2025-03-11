import type React from 'react';
import { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Loader = () => {
  const animatedValues = useRef(
    new Array(5).fill(0).map(() => new Animated.Value(0))
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotAnimations = animatedValues.map((value, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(index * 120),
          Animated.parallel([
            Animated.timing(value, {
              toValue: 1,
              duration: 2000,
              easing: Easing.bezier(0.4, 0, 0.7, 1),
              useNativeDriver: true,
            }),
            Animated.spring(value, {
              toValue: 1,
              friction: 3,
              tension: 40,
              useNativeDriver: true,
            }),
          ]),
        ])
      );
    });

    const textAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.parallel([...dotAnimations, textAnimation]).start();

    return () => {
      dotAnimations.forEach(anim => anim.stop());
      textAnimation.stop();
    };
  }, []);

  const dots = animatedValues.map((value, index) => {
    const translateY = value.interpolate({
      inputRange: [0, 0.4, 0.8, 1],
      outputRange: [0, -35, 10, 0],
    });

    const rotate = value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const scale = value.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.8, 1],
    });

    const color = value.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#ff6b6b', '#ff9f43', '#54a0ff'],
    });

    return (
      <Animated.View
        key={index}
        style={[
          styles.dot,
          {
            transform: [{ translateY }, { scale }, { rotate }],
            backgroundColor: color,
          },
        ]}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>{dots}</View>
      <Animated.Text style={[styles.message, { opacity: fadeAnim }]}>
        Loading your content...
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fe',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  message: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.8,
    textAlign: 'center',
    maxWidth: width * 0.8,
    color: '#2d3436',
    fontFamily: 'Helvetica',
    textShadowColor: 'rgba(45, 52, 54, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default Loader;

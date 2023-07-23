import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedCard: React.FC<{ title: string, onPress: () => void }> = ({ title, onPress }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => onPress());

  };

  return (
    <AnimatedTouchableOpacity style={[styles.card, { opacity: fadeAnim }]} onPress={handlePress}>
      <Text style={styles.cardText}>{title}</Text>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: '#1b1464',
    borderRadius: 11,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AnimatedCard;

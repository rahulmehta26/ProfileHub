import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const LinearGradients = ({ children }: { children: ReactNode }) => {
  return (
    
    <BlurView intensity={10} tint="extraLight" style={styles.blurContainer}>
      <LinearGradient
        colors={['#4a00e0', '#8e44ad', '#ff00ff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    overflow: 'hidden', 
  },
});

export default LinearGradients;

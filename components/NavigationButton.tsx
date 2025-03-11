import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { COLORS } from '@/constant/color';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const NavigationButton = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: NavigationButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, !canGoPrevious && styles.buttonDisabled]}
        onPress={onPrevious}
        disabled={!canGoPrevious}>
        <MaterialIcons name='chevron-left' size={40} color={canGoPrevious ? COLORS.softBlue : '#4b5563'} />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, !canGoNext && styles.buttonDisabled]}
        onPress={onNext}
        disabled={!canGoNext}>
        <MaterialIcons name='chevron-right' size={40} color={canGoNext ? COLORS.softBlue : '#4b5563'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 16,
    backgroundColor: COLORS.white,
    paddingVertical:6
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 16,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(75, 85, 99, 0.1)',
  },
});

export default NavigationButton;

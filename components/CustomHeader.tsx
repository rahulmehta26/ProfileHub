import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '@/constant/color';

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 24,
  },
  titleText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
  },
});

export default CustomHeader;

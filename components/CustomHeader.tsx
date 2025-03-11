import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

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
    backgroundColor: '#1e1b4b',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 24,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
});

export default CustomHeader;

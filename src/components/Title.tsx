import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export default Title;

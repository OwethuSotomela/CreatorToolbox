import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme'; 

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: theme.spacing.medium,
    color: theme.colors.primary,
    textAlign: 'center'
  }
});

export default Title;
import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import Title from '../components/Title';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title>Creator Toolbox</Title>

      <Text style={styles.sub}>What would you like to do today?</Text>

      <Button title="🎯 Generate Captions" onPress={() => navigation.navigate('CaptionGen')} />
      <Button title="🗓️ Plan Content" onPress={() => navigation.navigate('ContentPlanner')} />
      <Button title="📈 Hashtag Research" onPress={() => navigation.navigate('Hashtag')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
    justifyContent: 'center',
    gap: theme.spacing.medium
  },
  sub: {
    marginVertical: theme.spacing.small,
    fontSize: 16,
    color: theme.colors.text
  }
});

export default DashboardScreen;

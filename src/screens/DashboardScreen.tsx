import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Welcome to Creator Toolbox</Text>
      <Text style={styles.subtitle}>Your content, your hustle. All in one place.</Text>

      <View style={styles.buttonContainer}>
        <Button title="🧠 AI Captions" onPress={() => navigation.navigate('CaptionGen')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="📅 Planner" onPress={() => navigation.navigate('Planner')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="🔍 Hashtag Finder" onPress={() => navigation.navigate('Hashtag')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="📝 Content Planner" onPress={() => navigation.navigate('ContentPlanner')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.large,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.medium
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large
  },
  buttonContainer: {
    marginVertical: theme.spacing.small
  }
});

export default DashboardScreen;
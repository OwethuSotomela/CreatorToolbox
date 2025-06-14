import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import theme from '../theme';
import Title from '../components/Title';

const ContentPlannerScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Plan Your Posts</Title>

      <Text style={styles.label}>Add a Post Idea:</Text>
      <TextInput style={styles.input} placeholder="e.g. GRWM for Friday" />

      <Button title="Add to Planner" onPress={() => {}} />

      <Text style={styles.label}>Your Planned Posts:</Text>
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background
  },
  label: {
    marginTop: theme.spacing.medium,
    fontWeight: '600',
    color: theme.colors.text
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    padding: theme.spacing.small,
    marginTop: theme.spacing.small
  },
  item: {
    marginTop: theme.spacing.small,
    padding: theme.spacing.small,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  }
});

export default ContentPlannerScreen;

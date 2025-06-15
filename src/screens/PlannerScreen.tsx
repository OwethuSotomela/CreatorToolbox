import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';

interface PlanItem {
  id: string;
  content: string;
  date: string;
}

const PlannerScreen = () => {
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [plans, setPlans] = useState<PlanItem[]>([]);

  const handleAddPlan = () => {
    if (!content || !date) return;
    const newPlan: PlanItem = {
      id: Date.now().toString(),
      content,
      date
    };
    setPlans([newPlan, ...plans]);
    setContent('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Content Planner</Text>

      <TextInput
        style={styles.input}
        placeholder="What will you post? (e.g. skincare tips)"
        value={content}
        onChangeText={setContent}
      />

      <TextInput
        style={styles.input}
        placeholder="When? (e.g. 2025-06-20)"
        value={date}
        onChangeText={setDate}
      />

      <Button title="Add to Planner" onPress={handleAddPlan} />

      <FlatList
        data={plans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.planItem}>
            <Text style={styles.planText}>{item.date}</Text>
            <Text style={styles.planContent}>{item.content}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary
  },
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: theme.spacing.small
  },
  list: {
    marginTop: theme.spacing.medium
  },
  planItem: {
    padding: 10,
    backgroundColor: '#f3f3f3',
    marginBottom: 10,
    borderRadius: 6
  },
  planText: {
    fontWeight: '600',
    color: '#333'
  },
  planContent: {
    marginTop: 4,
    color: '#555'
  }
});

export default PlannerScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { generateCaption } from '../services/captionService';
import theme from '../theme'; 

const CaptionGenScreen = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [caption, setCaption] = useState('');

  const handleGenerate = async () => {
    const result = await generateCaption(topic, tone);
    setCaption(result);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Captions with AI</Text>

      <Text style={styles.label}>Topic:</Text>
      <TextInput style={styles.input} onChangeText={setTopic} placeholder="e.g. Morning routine" />

      <Text style={styles.label}>Tone:</Text>
      <TextInput style={styles.input} onChangeText={setTone} placeholder="e.g. Funny, Aesthetic" />

      <Button title="Generate Caption" onPress={handleGenerate} />

      {caption && (
        <View style={styles.result}>
          <Text style={styles.label}>Result:</Text>
          <Text>{caption}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: theme.colors.primary
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
  result: {
    marginTop: theme.spacing.large
  }
});

export default CaptionGenScreen;
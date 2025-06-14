import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { generateCaption } from '../services/captionService';

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
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  label: { marginTop: 15, fontWeight: '600' },
  input: { borderColor: '#aaa', borderWidth: 1, borderRadius: 6, padding: 10, marginTop: 5 },
  result: { marginTop: 20 }
});

export default CaptionGenScreen;

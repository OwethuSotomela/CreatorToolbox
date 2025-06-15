import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import theme from '../theme';

const mockHashtagGenerator = (keyword: string): string[] => {
  if (!keyword) return [];
  const base = keyword.toLowerCase().replace(/\s+/g, '');
  return [
    `#${base}`,
    `#${base}Tips`,
    `#Viral${base}`,
    `#${base}Challenge`,
    `#${base}Life`,
    `#Trending${base}`,
    `#${base}Reels`,
    `#${base}Tok`,
    `#${base}Inspo`,
    `#${base}Content`
  ];
};

const HashtagScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);

  const handleGenerate = () => {
    const generated = mockHashtagGenerator(keyword);
    setHashtags(generated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Viral Hashtags 🔥</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter topic (e.g. fitness, skincare)"
        value={keyword}
        onChangeText={setKeyword}
      />

      <Button title="Generate Hashtags" onPress={handleGenerate} />

      <FlatList
        data={hashtags}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.hashtag}>{item}</Text>}
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
  hashtag: {
    fontSize: 16,
    paddingVertical: 4,
    color: theme.colors.text
  }
});

export default HashtagScreen;

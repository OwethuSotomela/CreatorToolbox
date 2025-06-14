export const generateCaption = async (topic: string, tone: string) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `Write an Instagram caption about "${topic}" in a ${tone} tone. Add emojis and 3 hashtags.`,
          },
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating caption:', error);
    return 'Something went wrong. Try again.';
  }
};

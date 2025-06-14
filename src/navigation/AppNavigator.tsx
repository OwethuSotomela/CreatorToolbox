import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaptionGenScreen from '../screens/CaptionGenScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CaptionGen">
      <Stack.Screen name="CaptionGen" component={CaptionGenScreen} options={{ title: 'AI Caption Generator' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

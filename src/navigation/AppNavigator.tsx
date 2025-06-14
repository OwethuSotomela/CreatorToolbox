import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CaptionGenScreen from '../screens/CaptionGenScreen';
import ContentPlannerScreen from '../screens/ContentPlannerScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CaptionGen">
        <Stack.Screen
          name="CaptionGen"
          component={CaptionGenScreen}
          options={{ title: 'AI Captions' }}
        />
        <Stack.Screen
          name="ContentPlanner"
          component={ContentPlannerScreen}
          options={{ title: 'Content Planner' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
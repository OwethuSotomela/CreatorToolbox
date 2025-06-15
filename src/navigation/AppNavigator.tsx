import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import CaptionGenScreen from '../screens/CaptionGenScreen';
import HashtagScreen from '../screens/HashtagScreen';
import PlannerScreen from '../screens/PlannerScreen';
import ContentPlannerScreen from '../screens/ContentPlannerScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Creator Toolbox 🧰' }}
        />
        <Stack.Screen
          name="CaptionGen"
          component={CaptionGenScreen}
          options={{ title: 'AI Captions 🧠' }}
        />
        <Stack.Screen
          name="Hashtag"
          component={HashtagScreen}
          options={{ title: 'Hashtag Finder 🔍' }}
        />
        <Stack.Screen
          name="Planner"
          component={PlannerScreen}
          options={{ title: 'Planner 📅' }}
        />
        <Stack.Screen
          name="ContentPlanner"
          component={ContentPlannerScreen}
          options={{ title: 'Content Planner 📝' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen.jsx';
import FeedScreen from '../screens/FeedScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ title: 'Feed', headerShown: false }} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile', headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
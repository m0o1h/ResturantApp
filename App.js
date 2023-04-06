import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' >
          <Stack.Screen name='HomeScreen' component={HomeScreen} 
          options={{
            headerShown:false,
          }}
          ></Stack.Screen>
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} 
          options={{
            headerShown:false,
          }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}


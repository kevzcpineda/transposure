/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import create from 'zustand'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Maps from './components/Maps';
import OtherScreen from './Screens/OtherScreen';
import { useStore } from "./store";
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

const App = () => {
  
  const [count1,setCount1] = useState(0);
  const {count2,increasecount2,kevin,changeKevin} = useStore(state => state)

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name = "Home"
            component={Maps}
            options ={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name = "anotherScreen"
            component={OtherScreen}
            options ={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:"black",
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

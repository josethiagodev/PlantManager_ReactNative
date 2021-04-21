import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/stack.routes';

import { LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
    Poppins_400Regular
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
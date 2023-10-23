import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./components/Navigation";
import 'react-native-gesture-handler'
import { PaperProvider, MD3DarkTheme as DarkTheme, MD3LightTheme as LightTheme } from "react-native-paper";


export default function App() {

  const myDarkTheme = {
    ...DarkTheme,
    roundness: 2,
    colors: {
      ...DarkTheme.colors,
      primary: 'darkorange',
      accent: 'darkorange',
    },
  };

  const myLightTheme = {
    ...LightTheme,
    roundness: 2,
    colors: {
      ...LightTheme.colors,
      primary: 'darkorange',
      accent: 'darkorange',
    },
  };

  const mySoftTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'darkorange',
      accent: 'darkorange',
      background: '#041C32',
    },
  };


  return (
    <PaperProvider theme={myDarkTheme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer >
    </PaperProvider>
  );
}

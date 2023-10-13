import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./components/Navigation";
import 'react-native-gesture-handler'
import { PaperProvider, MD3DarkTheme as DarkTheme, MD3LightTheme as LightTheme } from "react-native-paper";


export default function App() {

  return (
    <PaperProvider theme={DarkTheme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer >
    </PaperProvider>
  );
}

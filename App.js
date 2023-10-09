import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./components/Navigation";
import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

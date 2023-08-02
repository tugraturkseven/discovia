import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from "./components/BottomNavBar";
import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer>
  );
}

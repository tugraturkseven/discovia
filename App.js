import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from "./components/BottomNavBar";
import { StyleSheet } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer>
  );
}

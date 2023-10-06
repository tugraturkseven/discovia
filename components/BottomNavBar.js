import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Category from '../screens/Category'
import Discover from "../screens/Discover";
import Share from "../screens/Share";
import ProfileSettings from "../screens/ProfileSettings";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const CategoryStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}>
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Discover" component={Discover} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const BottomNavBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "home-variant" : "home-variant-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Category"
                component={CategoryStack}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "compass" : "compass-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Share"
                component={Share}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "ticket-confirmation" : "ticket-confirmation-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={ProfileSettings}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "account" : "account-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavBar;
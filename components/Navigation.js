import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Category from '../screens/Category'
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

import Routes from "../screens/Categories/Route/Routes"
import Restaurants from "../screens/Categories/Restaurant/Restaurants"
import Events from "../screens/Categories/Events/Events"
import Nightlife from "../screens/Categories/Nightlife/Nightlife"
import Museums from "../screens/Categories/Museum/Museums"
import Parks from "../screens/Categories/Parks/Parks"
import Camping from "../screens/Categories/Camping/Campings"
import Religion from "../screens/Categories/Religion/Religions";
import Shoppings from "../screens/Categories/Shopping/Shoppings";
import Beachs from "../screens/Categories/Beach/Beachs";
import Account from "../screens/Settings/Account";



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Category Stack Navigation Screens
const CategoryStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}>
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Routes" component={Routes} />
                <Stack.Screen name="Restaurants" component={Restaurants} />
                <Stack.Screen name="Events" component={Events} />
                <Stack.Screen name="Nightlife" component={Nightlife} />
                <Stack.Screen name="Museums" component={Museums} />
                <Stack.Screen name="Parks" component={Parks} />
                <Stack.Screen name="Camping" component={Camping} />
                <Stack.Screen name="Religion" component={Religion} />
                <Stack.Screen name="Shopping" component={Shoppings} />
                <Stack.Screen name="Beach" component={Beachs} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const SettingsStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
            }}>
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Navigation = () => {
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
                name="Profile"
                component={Profile}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "ticket-confirmation" : "ticket-confirmation-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "cog" : "cog-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
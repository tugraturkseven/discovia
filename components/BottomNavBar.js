import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Booking from "../screens/Booking";
import Bookmark from "../screens/Bookmark";
import ProfileSettings from "../screens/ProfileSettings";

const Tab = createBottomTabNavigator();

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
                name="Booking"
                component={Booking}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "ticket-confirmation" : "ticket-confirmation-outline"} color={focused ? "green" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "bookmark-minus" : "bookmark-minus-outline"} color={focused ? "green" : "grey"} size={24} />
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
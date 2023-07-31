import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavBar;
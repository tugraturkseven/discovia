import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Category from '../screens/Category'
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

// Category Screens
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

// Settings Screens
import Account from "../screens/Settings/Account";
import City from "../screens/Settings/City";
import Theme from "../screens/Settings/Theme";
import Notifications from "../screens/Settings/Notifications";
import Privacy from "../screens/Settings/Privacy";
import Language from "../screens/Settings/Language";
import About from "../screens/Settings/About";
import Contact from "../screens/Settings/Contact";
import PersonalInformation from "../screens/Settings/PersonalInformation";
import Username from "../screens/Settings/Username";
import Email from "../screens/Settings/Email";
import Phone from "../screens/Settings/Phone";
import Password from "../screens/Settings/Password";
import DeleteAccount from "../screens/Settings/DeleteAccount";




// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Theme
import { useTheme } from "react-native-paper";

// Category Stack Navigation Screens
const CategoryStack = () => {
    const { colors } = useTheme();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                title: 'Discovia',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android

                },
                headerTintColor: 'darkorange',
                headerShadowVisible: false,
                headerTitleAlign: 'center',
            }
            }>
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

// Settings Screen Stack
const SettingsStack = () => {
    const { colors } = useTheme();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
                title: 'Discovia',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android
                },
                headerShadowVisible: false,
                headerTintColor: 'darkorange',
                headerRight: () => (
                    <MaterialCommunityIcons.Button
                        name="check"
                        size={24}
                        backgroundColor={colors.background}
                        color="darkorange"
                        onPress={() => alert('Saved.')}
                    />
                ),
            }}>
                <Stack.Screen name="Settings" component={Settings} options={{
                    headerRight: null,
                }} />
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="City" component={City} />
                <Stack.Screen name="Theme" component={Theme} options={{
                    headerRight: null,
                }} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Privacy" component={Privacy} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="About" component={About} options={{
                    headerRight: null,
                }} />
                <Stack.Screen name="Contact" component={Contact} options={{
                    headerRight: () => (
                        <MaterialCommunityIcons.Button
                            name="send"
                            size={24}
                            backgroundColor={colors.background}
                            color="darkorange"
                            onPress={() => alert('Message sent.')}
                        />
                    ),
                }} />
                <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
                <Stack.Screen name="Username" component={Username} />
                <Stack.Screen name="Email" component={Email} />
                <Stack.Screen name="Phone" component={Phone} />
                <Stack.Screen name="Password" component={Password} />
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Navigation = () => {

    const { colors } = useTheme();

    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: colors.background,
                borderTopColor: colors.background,
            }
        }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "home-variant" : "home-variant-outline"} color={focused ? "darkorange" : "grey"} size={24} />
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
                        <MaterialCommunityIcons name={focused ? "compass" : "compass-outline"} color={focused ? "darkorange" : "grey"} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarShowLabel: false,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.background,
                        backgroundColor: colors.background,
                        shadowColor: colors.background, // iOS
                        elevation: 0, // Android
                    },
                    headerShadowVisible: false,
                    headerTintColor: 'darkorange',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 21,
                    },
                    headerRight: () => (
                        <MaterialCommunityIcons.Button
                            name="plus-box"
                            size={24}
                            backgroundColor={colors.background}
                            color="darkorange"
                            onPress={() => alert('Share.')}
                        />
                    ),

                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={focused ? "account" : "account-outline"} color={focused ? "darkorange" : "grey"} size={24} />
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
                        <MaterialCommunityIcons name={focused ? "cog" : "cog-outline"} color={focused ? "darkorange" : "grey"} size={24} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
};

export default Navigation;
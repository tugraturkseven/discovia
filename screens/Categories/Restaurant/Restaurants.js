import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const RestaurantCategory = ({ navigation }) => {
    const { colors } = useTheme();
    const restaurantCategories = {
        'All Restaurants': {
            icon: '🥗',
            description: 'Explore all restaurants in the city',
            screen: 'AllRestaurants',
        },
        'Fast Food': {
            icon: '🍔',
            description: 'Grab a quick bite',
            screen: 'FastFood',
        },
        'Breakfast': {
            icon: '🥞',
            description: 'Start your day with a good breakfast',
            screen: 'Breakfast',
        },
        'Lunch': {
            icon: '🍱',
            description: 'Enjoy a delicious lunch',
            screen: 'Lunch',
        }, 'Dinner': {
            icon: '🍽️',
            description: 'Classic dining',
            screen: 'Dinner',
        },
        'Vegetarian': {
            icon: '🥙',
            description: 'Healthy food',
            screen: 'Vegetarian',
        },

        'Cafe': {
            icon: '☕',
            description: 'Boost your mood with a coffee',
            screen: 'Cafe',
        },
        'Dessert': {
            icon: '🍰',
            description: 'Satisfy your sweet tooth',
            screen: 'Dessert',
        },
        'Bar': {
            icon: '🍻',
            description: 'Alcoholic beverages',
            screen: 'Bar',
        },
        'Seafood': {
            icon: '🦞',
            description: 'Fresh seafood',
            screen: 'Seafood',
        },

    };

    const renderCategories = () => {
        return Object.keys(restaurantCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{restaurantCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{restaurantCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(restaurantCategories[key].screen)}
                />
            )
        })
    }


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <List.Section>
                {renderCategories()}
            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        backgroundColor: "white",
    },
    header: {
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default RestaurantCategory
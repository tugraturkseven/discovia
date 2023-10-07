import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const RestaurantCategory = ({ navigation }) => {

    const restaurantCategories = {
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
        'Ice Cream': {
            icon: '🍦',
            description: 'Cool down with an ice cream',
            screen: 'IceCream',
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
                    description={restaurantCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{restaurantCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(restaurantCategories[key].screen)}
                />
            )
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Button style={{ margin: 0, padding: 0 }} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} style={{ color: 'green' }} />
                </Button>
                <Text variant='displaySmall' style={{ color: "green", }}>Travisor</Text>
                <Button style={{ margin: 0, padding: 0 }}>
                    <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
                </Button>
            </View>
            <List.Section>
                {renderCategories()}
            </List.Section>
        </SafeAreaView>
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
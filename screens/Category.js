import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, useTheme } from 'react-native-paper';
import React from 'react'

/*
  'Sports': '⚽',
        'Cinema': '🎬',
        'Theatre': '🎭',
        'Music': '🎵',
*/

const Category = ({ navigation }) => {
    const { colors } = useTheme();

    const placesToVisit = {
        'Route': {
            icon: '🗺️',
            description: 'Discover new routes for your next journey',
            screen: 'Routes',
        },
        'Restaurant': {
            icon: '🥗',
            description: 'Enjoy the best restaurants in the city',
            screen: 'Restaurants',
        },
        'Events': {
            icon: '🎉',
            description: 'Find out what is happening in the city',
            screen: 'Events',
        },
        'Nightlife': {
            icon: '🍺',
            description: 'Discover the best places to go out at night',
            screen: 'Nightlife',
        },
        'Museum': {
            icon: '🏛️',
            description: 'Find out more about the city\'s history and culture',
            screen: 'Museums',
        },
        'Parks': {
            icon: '🏞️',
            description: 'Quiet places to relax and enjoy nature',
            screen: 'Parks',
        },
        'Camping': {
            icon: '🏕️',
            description: 'Find the best places to camp',
            screen: 'Camping',
        },
        'Temples': {
            icon: '🕯️',
            description: 'City\'s most important religious places',
            screen: 'Religion',
        },
        'Shopping': {
            icon: '🛍️',
            description: 'Shopping centers and stores',
            screen: 'Shopping',
        },
        'Beach': {
            icon: '🏖️',
            description: 'The best beaches around you',
            screen: 'Beach',
        }
    };

    const listPlacesToVisit = Object.keys(placesToVisit).map((key) => {
        return (
            <List.Item
                key={key}
                title={key}
                description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{placesToVisit[key].description}</Text>}
                left={props => <Text {...props} variant='displaySmall'>{placesToVisit[key].icon}</Text>}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => navigation.navigate(placesToVisit[key].screen)}

            />
        )
    });


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <List.Section>
                {listPlacesToVisit}
            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
});


export default Category
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Events = ({ navigation }) => {
    const { colors } = useTheme();
    const eventCategories = {
        'All Events': {
            icon: '🎉',
            description: 'Explore all events in the city',
            screen: 'AllEvents',
        },
        'Sports': {
            icon: '⚽',
            description: 'Find out what is happening in the city',
            screen: 'Sports',
        },
        'Cinema': {
            icon: '🎬',
            description: 'Get the best seats for the next movie',
            screen: 'Cinema',
        },
        'Theatre': {
            icon: '🎭',
            description: 'Drama, comedy, musicals and more',
            screen: 'Theatre',
        },
        'Concerts': {
            icon: '🎹',
            description: 'Live music with the best artists',
            screen: 'Music',
        },
        'Festival': {
            icon: '🥳',
            description: 'Join the party and have fun with your friends',
            screen: 'Festival',
        },
        'Dance': {
            icon: '💃',
            description: 'Dance with the stars',
            screen: 'Dance',
        },
        'Comedy': {
            icon: '🤣',
            description: 'Comedy shows and stand-up ',
            screen: 'Comedy',
        },
    };

    const renderCategories = () => {
        return Object.keys(eventCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{eventCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{eventCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(eventCategories[key].screen)}
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


export default Events
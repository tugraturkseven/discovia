import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Events = ({ navigation }) => {

    const eventCategories = {
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
        'Music': {
            icon: '🎹',
            description: 'Concerts and live music with the best artists',
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
                    description={eventCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{eventCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(eventCategories[key].screen)}
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


export default Events
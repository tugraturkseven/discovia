import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Parks = ({ navigation }) => {
    const parkCategories = {
        'All Parks': {
            icon: '🏞️',
            description: 'Explore all parks in the city',
            screen: 'AllParks',
        },
        'National Park': {
            icon: '🌻',
            description: 'Quiet places to relax and enjoy nature',
            screen: 'National Park',
        },
        'City Park': {
            icon: '🌳',
            description: 'Find the best city parks',
            screen: 'City Park',
        },
        'Dog Park': {
            icon: '🐶',
            description: 'Relax with your dog in the best parks',
            screen: 'Dog Park',
        },
        'Theme Park': {
            icon: '🎢',
            description: 'Thrilling rides and fun for all ages',
            screen: 'Theme Park',
        },
        'Amusement Park': {
            icon: '🎡',
            description: 'Unforgettable experiences for the whole family',
            screen: 'Amusement Park',
        },

    };


    const renderCategories = () => {
        return Object.keys(parkCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={parkCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{parkCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(parkCategories[key].screen)}
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


export default Parks
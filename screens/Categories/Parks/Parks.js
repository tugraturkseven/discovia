import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Parks = ({ navigation }) => {
    const { colors } = useTheme();
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
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{parkCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{parkCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(parkCategories[key].screen)}
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


export default Parks
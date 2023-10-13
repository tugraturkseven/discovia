import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';

import React from 'react'
import Header from '../../../components/Header';

const RouteCategories = ({ navigation }) => {
    const { colors } = useTheme();
    const routeCategories = {
        'All Routes': {
            icon: '🗺️',
            description: 'Explore all routes in the city',
            screen: 'AllRoutes',
        },
        'Nature': {
            icon: '⛰️',
            description: 'Explore the city\'s natural beauty',
            screen: 'Nature',
        },
        'Cultural': {
            icon: '🎭',
            description: 'Feel the city\'s culture',
            screen: 'Cultural',
        },
        'Historical': {
            icon: '🏛️',
            description: 'Widen your knowledge about the city\'s history',
            screen: 'Historical',
        },
        'Romantic': {
            icon: '💖',
            description: 'Explore romantic destinations with your partner',
            screen: 'Romantic',
        },

    };

    const renderCategories = () => {
        return Object.keys(routeCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={routeCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{routeCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(routeCategories[key].screen)}
                />
            )
        })
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <Header goBack={true} />
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
    }
});

export default RouteCategories
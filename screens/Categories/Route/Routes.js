import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const RouteCategories = ({ navigation }) => {

    const routeCategories = {
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

export default RouteCategories
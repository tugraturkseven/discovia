import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Museums = ({ navigation }) => {

    const museumCategories = {
        'Art Museum': {
            icon: '🎨',
            description: 'Museums with the best art collections',
            screen: 'Art Museum',
        },
        'History Museum': {
            icon: '🏺',
            description: 'Find out more about the city\'s history',
            screen: 'History Museum',
        },
        'Science Museum': {
            icon: '🔬',
            description: 'Where science and technology meet',
            screen: 'Science Museum',
        },
        'Natural History Museum': {
            icon: '🦖',
            description: 'Relive the history of the planet',
            screen: 'Natural History Museum',
        },
        'Military Museum': {
            icon: '🎖️',
            description: 'War and military history museums',
            screen: 'Military Museum',
        },
        'Planetarium': {
            icon: '🌌',
            description: 'Watch the stars and planets in the sky',
            screen: 'Planetarium',
        },
        'Aquarium': {
            icon: '🐠',
            description: 'Discover the best aquariums in the city',
            screen: 'Aquarium',
        },
        'Zoo': {
            icon: '🐵',
            description: 'Visit the best zoos near you and see the animals',
            screen: 'Zoo',
        },
    };

    const renderCategories = () => {
        return Object.keys(museumCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={museumCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{museumCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(museumCategories[key].screen)}
                />
            );
        });
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
export default Museums
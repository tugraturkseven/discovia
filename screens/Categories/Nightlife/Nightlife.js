import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'


const Nightlife = ({ navigation }) => {

    const nightlifeCategories = {
        'Pub': {
            icon: '🍻',
            description: 'Enjoy a beer with your friends',
            screen: 'Pub',
        },
        'Club': {
            icon: '🕺',
            description: 'Dance all night long',
            screen: 'Club',
        },
        'Lounge': {
            icon: '🍸',
            description: 'Relax and enjoy a cocktail',
            screen: 'Lounge',
        },

        'Wine Bar': {
            icon: '🍷',
            description: 'Enjoy a glass of wine',
            screen: 'Wine Bar',
        },
        'Casino': {
            icon: '🎰',
            description: 'Try your luck',
            screen: 'Casino',
        },
        'Karaoke': {
            icon: '🎙️',
            description: 'Sing your favorite songs',
            screen: 'Karaoke',
        },
        'Live Music': {
            icon: '🎷',
            description: 'Concerts and live music with the best artists',
            screen: 'Live Music',
        },

    };

    const renderCategories = () => {
        return Object.keys(nightlifeCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={nightlifeCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{nightlifeCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(nightlifeCategories[key].screen)}
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


export default Nightlife
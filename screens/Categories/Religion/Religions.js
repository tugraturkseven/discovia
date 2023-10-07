import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Religions = ({ navigation }) => {

    const religionCategories = {
        'Church': {
            icon: '⛪',
            description: 'Churches, cathedrals and basilicas in the city',
            screen: 'Church',
        },
        'Mosque': {
            icon: '🕌',
            description: 'Mosques known for their architecture and history',
            screen: 'Mosque',
        },
        'Synagogue': {
            icon: '🕍',
            description: 'Synagogues and Jewish temples in the city',
            screen: 'Synagogue',
        },

    };

    const renderCategories = () => {
        return Object.keys(religionCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={religionCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{religionCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(religionCategories[key].screen)}
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

export default Religions
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Beachs = ({ navigation }) => {
    const { colors } = useTheme();
    const beachCategories = {
        'All Beachs': {
            icon: '🏖️',
            description: 'Explore all beachs in the city',
            screen: 'AllBeachs',
        },
        'Beach': {
            icon: '🏊',
            description: 'Beaches and beach clubs to enjoy the sea',
            screen: 'Beach',
        },
        'Bays': {
            icon: '🌊',
            description: 'Bays and coves to enjoy the sea',
            screen: 'Bays',
        },
    }

    const renderCategories = () => {
        return Object.keys(beachCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={beachCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{beachCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(beachCategories[key].screen)}
                />
            )
        })
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <Button style={{ margin: 0, padding: 0 }} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} style={{ color: 'green' }} />
                </Button>
                <Text variant='displaySmall' style={{ color: "green", }}>Travisor</Text>
                <Button style={{ margin: 0, padding: 0 }}>
                    <FontAwesomeIcon icon={faBell} size={24} style={{ color: colors.background }} />
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
export default Beachs
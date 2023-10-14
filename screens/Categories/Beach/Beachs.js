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
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{beachCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{beachCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(beachCategories[key].screen)}
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
export default Beachs
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Campings = ({ navigation }) => {
    const { colors } = useTheme();
    const campingCategories = {
        'All Campings': {
            icon: '🏕️',
            description: 'Explore all campings in the city',
            screen: 'AllCampings',
        },
        'Campground': {
            icon: '⛺',
            description: 'Find the best campgrounds near you',
            screen: 'Campground',
        },
        'RV Park': {
            icon: '🚐',
            description: 'Find the best RV parks for your vehicle',
            screen: 'RV Park',
        },
        'Wild Camping': {
            icon: '🪵',
            description: 'Wild camping sites for the adventurous',
            screen: 'Wild Camping',
        },
        'Beach Camping': {
            icon: '🏖️',
            description: 'Stay on the sand and enjoy the beach',
            screen: 'Beach Camping',
        },
    };

    const renderCategories = () => {
        return Object.keys(campingCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{campingCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{campingCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(campingCategories[key].screen)}
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

export default Campings
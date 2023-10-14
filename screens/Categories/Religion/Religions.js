import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Religions = ({ navigation }) => {
    const { colors } = useTheme();
    const religionCategories = {
        'All Temples': {
            icon: '🕯️',
            description: 'Explore all religions in the city',
            screen: 'AllReligions',
        },
        'Mosque': {
            icon: '🕌',
            description: 'Mosques known for their architecture and history',
            screen: 'Mosque',
        },
        'Church': {
            icon: '⛪',
            description: 'Churches, cathedrals and basilicas in the city',
            screen: 'Church',
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
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{religionCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{religionCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(religionCategories[key].screen)}
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

export default Religions
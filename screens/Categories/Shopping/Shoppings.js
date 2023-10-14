import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Shoppings = ({ navigation }) => {
    const { colors } = useTheme();
    const shoppingCategories = {
        'All Shoppings': {
            icon: '🛍️',
            description: 'Explore all shoppings in the city',
            screen: 'AllShoppings',
        },
        'Shopping Center': {
            icon: '🛒',
            description: 'Shopping centers and stores',
            screen: 'ShoppingCenter',
        },
        'Supermarket': {
            icon: '🍞',
            description: 'Supermarkets and grocery stores',
            screen: 'Supermarket',
        },
        'Market': {
            icon: '🏬',
            description: 'Street markets and fairs',
            screen: 'Market',
        },

    };

    const renderCategories = () => {
        return Object.keys(shoppingCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>{shoppingCategories[key].description}</Text>}
                    left={props => <Text {...props} variant='displaySmall'>{shoppingCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(shoppingCategories[key].screen)}
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

export default Shoppings
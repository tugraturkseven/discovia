import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Shoppings = ({ navigation }) => {

    const shoppingCategories = {
        'Shopping Center': {
            icon: '🛍️',
            description: 'Shopping centers and stores',
            screen: 'ShoppingCenter',
        },
        'Supermarket': {
            icon: '🛒',
            description: 'Supermarkets and grocery stores',
            screen: 'Supermarket',
        },
        'Market': {
            icon: '🏬',
            description: 'Markets and street markets',
            screen: 'Market',
        },

    };

    const renderCategories = () => {
        return Object.keys(shoppingCategories).map((key) => {
            return (
                <List.Item
                    key={key}
                    title={key}
                    description={shoppingCategories[key].description}
                    left={props => <Text {...props} variant='displaySmall'>{shoppingCategories[key].icon}</Text>}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.navigate(shoppingCategories[key].screen)}
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

export default Shoppings
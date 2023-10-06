import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text } from 'react-native-paper';
import React from 'react'
import Discover from './Discover';

const Category = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text variant='displaySmall' style={{ color: "green" }}>Travisor</Text>
            </View>
            <List.Item
                title="Routes"
                description="Discover new routes for your next journey"
                left={props => <Text {...props} variant='displaySmall'>🗺️</Text>}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => navigation.navigate('Discover')}
            />
            <List.Item
                title="Restaurants"
                description="Enjoy the best restaurants in the city"
                left={props => <Text {...props} variant='displaySmall'>🥗</Text>}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => navigation.navigate('Restaurants')}
            />
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
        margin: 16,
        alignItems: "center",
    },
});


export default Category
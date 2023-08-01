import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, IconButton, MD3Colors } from 'react-native-paper'

import Hero from '../components/Hero'
import UserAvatar from '../components/UserAvatar'
import TripCard from '../components/TripCard'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <UserAvatar />
                <View>
                    <Text variant='titleMedium' style={{ color: "grey" }}>Welcome back! 👋</Text>
                    <Text variant='headlineLarge' style={{ fontWeight: "bold" }}>Tugra Turkseven</Text>
                </View>
                <IconButton icon="bell-badge-outline" style={{ color: MD3Colors.tertiary70 }} size={24} onPress={() => console.log('Pressed')} />
            </View>
            <Hero></Hero>
            <View style={styles.text}>
                <Text variant='headlineSmall' style={{ fontWeight: "700" }}>Popular Now</Text>
                <Text variant='titleMedium' style={{ color: "grey" }}>View All</Text>
            </View>
            <TripCard></TripCard>
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "white",
    },
    header: {
        margin: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    text: {
        margin: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});

export default Home
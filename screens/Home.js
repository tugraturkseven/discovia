import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, IconButton, useTheme, Searchbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserAvatar from '../components/UserAvatar'
import Card from '../components/Card'

const Home = () => {

    const { colors } = useTheme();
    const giresun = { uri: 'https://cdn.goturkiye.com/giresun/see-desktop-kapak.jpg' };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['right', 'left', 'top']}>
            <View style={styles.header}>
                <UserAvatar />
                <View>
                    <Text variant='titleMedium' >Welcome back! 👋</Text>
                    <Text variant='headlineLarge' style={{ fontWeight: "bold" }}>Tugra Turkseven</Text>
                </View>
                <IconButton icon="bell-badge-outline" style={{ color: colors.onBackground }} size={24} onPress={() => console.log('Pressed')} />
            </View>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="What are you looking for?"
                    placeholderTextColor={colors.outline}
                    iconColor={colors.outline}
                />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Text variant='headlineMedium'>Your People</Text>
                    <Text variant='bodyMedium' style={{ color: colors.outline }}>See All</Text>
                </View>
                <ScrollView >
                    <Card img={giresun} title='Karadeniz Turu' city='Giresun, Turkey.' category='Route' />
                </ScrollView>
            </ScrollView>

        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        margin: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    searchContainer: {
        margin: 16,
        justifyContent: 'space-evenly',
    },
    scrollContainer: {
        margin: 16,
        marginBottom: 0,
        flex: 1,
    }
});

export default Home
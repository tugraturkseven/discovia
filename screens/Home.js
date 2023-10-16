import { View, StyleSheet } from 'react-native'
import { Text, IconButton, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserAvatar from '../components/UserAvatar'


const Home = () => {

    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <UserAvatar />
                <View>
                    <Text variant='titleMedium' >Welcome back! 👋</Text>
                    <Text variant='headlineLarge' style={{ fontWeight: "bold" }}>Tugra Turkseven</Text>
                </View>
                <IconButton icon="bell-badge-outline" style={{ color: colors.onBackground }} size={24} onPress={() => console.log('Pressed')} />
            </View>

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
    text: {
        margin: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
    }
});

export default Home
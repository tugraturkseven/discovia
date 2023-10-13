import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile
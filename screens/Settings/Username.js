import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

const Username = () => {
    const { colors } = useTheme();
    const [username, setUsername] = useState('tugraturkseven');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your username.
            </Text>
            <TextInput
                label="Username"
                value={username}
                onChangeText={username => setUsername(username)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                Your username must be unique and can only contain letters, numbers and underscores.
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})


export default Username
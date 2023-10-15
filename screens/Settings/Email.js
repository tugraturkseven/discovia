import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

const Email = () => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('tugra@discovia.com');


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your email.
            </Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                We will send you a confirmation email to your new email address.
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


export default Email
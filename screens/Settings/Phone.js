import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, Button } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

const Phone = () => {
    const { colors } = useTheme();
    const [phone, setPhone] = useState('+90 555 555 55 55');
    const [confirmationCode, setConfirmationCode] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your phone number.
            </Text>
            <TextInput
                label="Phone"
                value={phone}
                onChangeText={phone => setPhone(phone)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />

            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                We will send you a confirmation SMS to your new phone number.
            </Text>
            <Button mode='contained' textColor={colors.background} style={{ backgroundColor: 'darkorange', marginVertical: 16 }}>Send Confirmation Code</Button>
            <TextInput
                label="Confirmation Code"
                value={confirmationCode}
                onChangeText={confirmationCode => setConfirmationCode(confirmationCode)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                Please enter the confirmation code you received.
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


export default Phone
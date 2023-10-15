import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme, TextInput } from 'react-native-paper'

const Contact = () => {
    const { colors } = useTheme();
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Subject, setSubject] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can share your feedbacks, suggestions or complaints with us.
            </Text>
            <TextInput
                label="Name"
                value={Name}
                onChangeText={() => setName(Name)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <TextInput
                label="Email"
                value={Email}
                onChangeText={() => setEmail(Email)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <TextInput
                label="Phone"
                value={Phone}
                onChangeText={() => setPhone(Phone)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <TextInput
                label="Subject"
                value={Subject}
                onChangeText={() => setSubject(Subject)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <TextInput
                label="Message"
                value={Message}
                onChangeText={() => setMessage(Message)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
                multiline={true}
                numberOfLines={4}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default Contact
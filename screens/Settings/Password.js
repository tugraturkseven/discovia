import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, ProgressBar } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

const Password = () => {
    const { colors } = useTheme();
    const [password, setPassword] = useState('');

    const [progress, setProgress] = useState(0);



    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your password. Please enter your current password and then enter your new password twice.
            </Text>
            <TextInput
                label="Current Password"
                value={password}
                onChangeText={password => setPassword(password)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
                secureTextEntry={true}
            />
            <TextInput
                label="New Password"
                value={password}
                onChangeText={password => setPassword(password)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
                secureTextEntry={true}
            />
            <TextInput
                label="New Password Again"
                value={password}
                onChangeText={password => setPassword(password)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
                secureTextEntry={true}
            />

            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5, marginVertical: 16 }}>
                Password Strength
            </Text>

            <ProgressBar progress={progress * 0.2} color='darkorange' style={{ marginHorizontal: 16 }} />

            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5, marginVertical: 16 }}>
                Your password must be at least 8 characters long.
            </Text>
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                Your password must contain at least one uppercase letter, one lowercase letter, one number and one special character.
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


export default Password
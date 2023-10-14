import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'



const City = () => {
    const { colors } = useTheme();
    const [city, setCity] = useState('');
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>In this page, you can change your city in order to get related recommendations.</Text>
            <TextInput
                label="City"
                value={city}
                onChangeText={city => setCity(city)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
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

export default City
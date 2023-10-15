import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, RadioButton, List } from 'react-native-paper'
import { useTheme } from 'react-native-paper'

const PersonalInformation = () => {
    const { colors } = useTheme();
    const [name, setName] = useState('Tugra Turkseven');
    const [birthday, setBirthday] = useState('06.07.1999');
    const [gender, setGender] = useState('Male');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your name, birthday and gender.
            </Text>
            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <TextInput
                label="Birthday"
                value={birthday}
                onChangeText={birthday => setBirthday(birthday)}
                style={{ margin: 16, backgroundColor: colors.background }}
                selectionColor='darkorange'
                activeOutlineColor='darkorange'
                activeUnderlineColor='darkorange'
            />
            <RadioButton.Group value={gender}>
                <List.Section style={{ padding: 16 }}>
                    <List.Item
                        title='Male'
                        description='Select your gender as Male'
                        onPress={() => setGender('Male')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>👨</Text>}
                        right={(props) => <RadioButton {...props} value={'Male'} />}
                    />
                    <List.Item
                        title='Female'
                        description='Select your gender as Female'
                        onPress={() => setGender('Female')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>👩</Text>}
                        right={(props) => <RadioButton {...props} value={'Female'} />}
                    />
                    <List.Item
                        title='LGBTQ+'
                        description='Select your gender as LGBTQ+'
                        onPress={() => setGender('LGBTQ+')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🏳️‍🌈</Text>}
                        right={(props) => <RadioButton {...props} value={'LGBTQ+'} />}
                    />
                    <List.Item
                        title='Do not specify'
                        description='Do not specify your gender'
                        onPress={() => setGender('Do not specify')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>❓</Text>}
                        right={(props) => <RadioButton {...props} value={'Do not specify'} />}
                    />
                </List.Section>
            </RadioButton.Group>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})



export default PersonalInformation
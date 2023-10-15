import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, useTheme, RadioButton, List } from 'react-native-paper'


const Language = () => {
    const { colors } = useTheme();
    const [value, setValue] = React.useState('English');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change application language. You can choose between English, Turkish or German.
            </Text>

            <RadioButton.Group value={value}>
                <List.Section style={{ padding: 16 }}>
                    <List.Item
                        title='English'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>English</Text>}
                        onPress={() => setValue('English')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🇬🇧</Text>}
                        right={() => <RadioButton value="English" />}
                    />
                    <List.Item
                        title='Turkish'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Türkçe</Text>}
                        onPress={() => setValue('Turkish')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🇹🇷</Text>}
                        right={() => <RadioButton value="Turkish" />}
                    />
                    <List.Item
                        title='German'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Deutsch</Text>}
                        onPress={() => setValue('German')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🇩🇪</Text>}
                        right={() => <RadioButton value="German" />}
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

export default Language
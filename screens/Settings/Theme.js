import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text, useTheme, RadioButton, List } from 'react-native-paper'


const Theme = () => {
    const { colors } = useTheme();
    const [value, setValue] = React.useState('Dark');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can change your theme. You can choose between dark, light or soft mode.
            </Text>

            <RadioButton.Group value={value}>
                <List.Section style={{ padding: 16 }}>
                    <List.Item
                        title='Dark'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Good at night time</Text>}
                        onPress={() => setValue('Dark')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🌙</Text>}
                        right={() => <RadioButton value="Dark" />}
                    />
                    <List.Item
                        title='Light'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Good at day time</Text>}
                        onPress={() => setValue('Light')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>☀️</Text>}
                        right={() => <RadioButton value="Light" />}
                    />
                    <List.Item
                        title='Soft'
                        description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Good at any time</Text>}
                        onPress={() => setValue('Soft')}
                        left={(props) => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🌤️</Text>}
                        right={() => <RadioButton value="Soft" />}
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

export default Theme
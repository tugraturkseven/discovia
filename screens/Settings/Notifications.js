import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme, Checkbox, List } from 'react-native-paper'


const Notifications = () => {
    const { colors } = useTheme();
    const [pushNotification, setPushNotification] = useState('unchecked');
    const [emailNotification, setEmailNotification] = useState('unchecked');
    const [smsNotification, setSmsNotification] = useState('unchecked');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can control your notification permissions. You can choose which notifications to receive.
            </Text>

            <List.Section style={{ padding: 16 }}>
                <List.Item
                    title='Push Notifications'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Receive push notifications</Text>}
                    onPress={() => setPushNotification(pushNotification === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>🔔</Text>}
                    right={() => <Checkbox status={pushNotification} />}
                />
                <List.Item
                    title='Email Notifications'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Receive email notifications</Text>}
                    onPress={() => setEmailNotification(emailNotification === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>📬</Text>}
                    right={() => <Checkbox status={emailNotification} />}
                />
                <List.Item
                    title='SMS Notifications'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Receive SMS notifications</Text>}
                    onPress={() => setSmsNotification(smsNotification === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>📱</Text>}
                    right={() => <Checkbox status={smsNotification} />}
                />
            </List.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default Notifications
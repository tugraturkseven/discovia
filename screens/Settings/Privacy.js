import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme, Checkbox, List } from 'react-native-paper'


const Privacy = () => {
    const { colors } = useTheme();
    const [showProfile, setShowProfile] = useState('unchecked')
    const [showLocation, setShowLocation] = useState('unchecked')
    const [showEmail, setShowEmail] = useState('unchecked')
    const [showPhone, setShowPhone] = useState('unchecked')

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can control your privacy settings. You can choose which information to share.
            </Text>

            <List.Section style={{ padding: 16 }}>
                <List.Item
                    title="Share my profile"
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Show your profile to other users</Text>}
                    left={props => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>🧙</Text>}
                    right={props => <Checkbox {...props} color='darkorange' status={showProfile} />}
                    onPress={() => { setShowProfile(showProfile === 'checked' ? 'unchecked' : 'checked') }}
                />
                <List.Item
                    title="Share my location"
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Show your location to other users</Text>}
                    left={props => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>📍</Text>}
                    right={props => <Checkbox {...props} color='darkorange' status={showLocation} />}
                    onPress={() => { setShowLocation(showLocation === 'checked' ? 'unchecked' : 'checked') }}
                />
                <List.Item
                    title="Share my email"
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Show your email to other users</Text>}
                    left={props => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>📧</Text>}
                    right={props => <Checkbox {...props} color='darkorange' status={showEmail} />}
                    onPress={() => { setShowEmail(showEmail === 'checked' ? 'unchecked' : 'checked') }}
                />
                <List.Item
                    title="Share my phone number"
                    description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Show your phone number to other users</Text>}
                    left={props => <Text {...props} variant='displaySmall' style={{ color: colors.onBackground }}>📱</Text>}
                    right={props => <Checkbox {...props} color='darkorange' status={showPhone} />}
                    onPress={() => { setShowPhone(showPhone === 'checked' ? 'unchecked' : 'checked') }}
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

export default Privacy
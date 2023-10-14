import { View, StyleSheet } from 'react-native'
import { Text, List, useTheme } from 'react-native-paper'
import UserAvatar from '../components/UserAvatar'


const Settings = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            <View style={{ padding: 16, paddingBottom: 8 }}>
                <Text variant='titleLarge' >Account</Text>
                <List.Section>
                    <List.Item
                        title="Tugra Turkseven"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Manage your account settings</Text>}
                        left={props => <UserAvatar {...props} size={54} />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        style={{ paddingLeft: 8 }}
                        onPress={() => navigation.navigate('Account')}
                    />
                </List.Section>
            </View>
            <View style={{ padding: 16 }}>
                <Text variant='titleLarge'>Application</Text>
                <List.Section>
                    <List.Item
                        title='City'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Choose your city</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🌇</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => navigation.navigate('City')}
                    />
                    <List.Item
                        title="Theme"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Dark, light or soft mode</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🌙</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => navigation.navigate('Theme')}
                    />
                    <List.Item
                        title="Notifications"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Choose which notifications to receive</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🔔</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Privacy"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Control your privacy settings</Text>}
                        left={props => <Text {...props} variant='displaySmall'>👁️</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Language"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Choose your language</Text>}
                        left={props => <Text {...props} variant='displaySmall'>💬</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />

                    <List.Item
                        title='About'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Learn more about Discovia</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🚀</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />

                    <List.Item
                        title='Contact'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Contact us for feedbacks and help </Text>}
                        left={props => <Text {...props} variant='displaySmall'>📮</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />



                </List.Section>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    header: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },

});

export default Settings
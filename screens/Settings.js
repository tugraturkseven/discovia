import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, List } from 'react-native-paper'
import UserAvatar from '../components/UserAvatar'

const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text variant='displaySmall' style={{ color: "green" }}>Travisor</Text>
            </View>
            <View style={{ padding: 16, paddingBottom: 8 }}>
                <Text variant='titleLarge'>Account</Text>
                <List.Section>
                    <List.Item
                        title="Tugra Turkseven"
                        description="Manage your account settings"
                        left={props => <UserAvatar {...props} />}
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
                        title='Addresses'
                        description='Manage your addresses'
                        left={props => <Text {...props} variant='displaySmall'>🏠</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Theme"
                        description="Choose your theme color"
                        left={props => <Text {...props} variant='displaySmall'>🌙</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}

                    />
                    <List.Item
                        title="Notifications"
                        description="Choose which notifications to receive"
                        left={props => <Text {...props} variant='displaySmall'>🔔</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Privacy"
                        description="Control your privacy settings"
                        left={props => <Text {...props} variant='displaySmall'>👁️</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Language"
                        description="Choose your language"
                        left={props => <Text {...props} variant='displaySmall'>💬</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />

                    <List.Item
                        title='About'
                        description='About Travisor and the application'
                        left={props => <Text {...props} variant='displaySmall'>🚀</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />

                    <List.Item
                        title='Contact'
                        description='Get help from Travisor'
                        left={props => <Text {...props} variant='displaySmall'>📮</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />



                </List.Section>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        backgroundColor: "white",
    },
    header: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },

});

export default Settings
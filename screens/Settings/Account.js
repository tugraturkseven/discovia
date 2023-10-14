import { View, StyleSheet } from 'react-native'
import { List, Text, Button, useTheme } from 'react-native-paper';
import UserAvatar from '../../components/UserAvatar';
import React from 'react'

const Account = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.profile}>
                <UserAvatar size={128} editable={true}></UserAvatar>
                <View style={{ flexDirection: 'column', paddingHorizontal: 16, justifyContent: 'space-evenly', width: '70%', }}>
                    <Text variant='titleMedium'>Profile Photo</Text>
                    <Text variant='bodyMedium' style={{ color: colors.onBackground, opacity: 0.5 }}>Upload a photo so your friends can recognize you</Text>
                    <Button mode='contained' textColor={colors.background} style={{ backgroundColor: 'darkorange' }}>Manage your photo</Button>
                </View>

            </View>
            <View style={styles.section}>
                <Text variant='titleLarge'>Contact</Text>
                <List.Section>
                    <List.Item
                        title='Personal Information'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Name, birthday, gender and more</Text>}
                        left={props => <Text {...props} variant='displaySmall'>👤</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title='Username'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>@tugraturkseven</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🤖</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Email"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>tugra@discovia.com</Text>}
                        left={props => <Text {...props} variant='displaySmall'>📪</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Phone"
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>+90 555 555 55 55</Text>}
                        left={props => <Text {...props} variant='displaySmall'>☎️</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>
                <Text variant='titleLarge'>Security</Text>
                <List.Section>
                    <List.Item
                        title='Password'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Change your password</Text>}
                        left={props => <Text {...props} variant='displaySmall'>🔒</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>
                <Text variant='titleLarge'>Data</Text>
                <List.Section>
                    <List.Item
                        title='Delete Account'
                        description={<Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Delete your account and all your data</Text>}
                        left={props => <Text {...props} variant='displaySmall'>💔</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>

            </View>
        </View >
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
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
    },
    section: {
        padding: 16,
        flexDirection: 'column',

    }
});

export default Account
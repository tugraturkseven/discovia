import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme, Text, Button } from 'react-native-paper'
import PostedCategory from '../components/PostedCategory'
import UserAvatar from '../components/UserAvatar'

const Profile = () => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            <View style={[styles.userSection, { borderBottomWidth: 1, borderBottomColor: colors.backdrop }]}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <UserAvatar size={96} />
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text variant='titleMedium'>Tugra Turkseven</Text>
                        <Text variant='bodyMedium' style={{ color: colors.onBackground, opacity: 0.5 }}>@tugraturkseven</Text>
                        <Text variant='bodyMedium' style={{ color: colors.onBackground, opacity: 0.5 }}>Istanbul, Turkey</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text variant='bodyLarge' style={{ color: colors.onBackground }}>10</Text>
                        <Text variant='bodyLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Post</Text>
                        <Text variant='bodyLarge' style={{ color: colors.onBackground }}>100</Text>
                        <Text variant='bodyLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Followers</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: 16 }}>
                    <Text variant='bodyLarge' style={{ color: colors.onBackground }}>A software engineer who likes to travel around. 🛫</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Edit Profile</Button>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Share Profile</Button>
                </View>
                <PostedCategory></PostedCategory>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userSection: {
        flexDirection: 'column',
        padding: 16,
    },
    profileButtons: {
        flex: 1,
        marginHorizontal: 8,
    }

})

export default Profile
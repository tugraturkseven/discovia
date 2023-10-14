import { View } from 'react-native'
import React from 'react'
import { Avatar, IconButton, useTheme } from 'react-native-paper'
import Profile from '../assets/profile.png'

/*
https://ibb.co/FHgxtgd
https://ibb.co/9WvxyR3
https://ibb.co/m84kHbw
https://ibb.co/Y2pyxsz
*/


const UserAvatar = (props) => {
    const { size = 54 } = props;
    const { editable = false } = props;
    const { colors } = useTheme();

    const showEditIcon = () => {
        if (editable) {
            return (
                <IconButton style={{ position: 'absolute', top: 0, right: 0, backgroundColor: colors.backdrop }} icon="pencil" iconColor="darkorange" size={20} />
            )
        }
    }

    return (
        <View>
            <Avatar.Image size={size} style={{ backgroundColor: colors.backdrop }} source={Profile} />
            {showEditIcon()}
        </View>
    )
}

export default UserAvatar
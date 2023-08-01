import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, MD3Colors } from 'react-native-paper'

/*
https://ibb.co/FHgxtgd
https://ibb.co/9WvxyR3
https://ibb.co/m84kHbw
https://ibb.co/Y2pyxsz
*/

const UserAvatar = () => {
    return (
        <View>
            <Avatar.Image size={54} style={{ backgroundColor: "#92E3A9" }} source={{ uri: 'https://www.tugraturkseven.com/img/profile.png' }} />
        </View>
    )
}

export default UserAvatar
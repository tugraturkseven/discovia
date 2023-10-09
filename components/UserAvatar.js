import { View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import Profile from '../assets/profile.png'

/*
https://ibb.co/FHgxtgd
https://ibb.co/9WvxyR3
https://ibb.co/m84kHbw
https://ibb.co/Y2pyxsz
*/


const UserAvatar = (props) => {
    const { size = 54 } = props

    return (
        <View>
            <Avatar.Image size={props.size} style={{ backgroundColor: "#92E3A9" }} source={Profile} />
        </View>
    )
}

export default UserAvatar
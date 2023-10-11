import { View } from 'react-native'
import React from 'react'
import { Avatar, IconButton } from 'react-native-paper'
import Profile from '../assets/profile.png'
import Icon from 'react-native-fontawesome'

/*
https://ibb.co/FHgxtgd
https://ibb.co/9WvxyR3
https://ibb.co/m84kHbw
https://ibb.co/Y2pyxsz
*/


const UserAvatar = (props) => {
    const { size = 54 } = props;
    const { editable = false } = props;

    const showEditIcon = () => {
        if (editable) {
            return (
                <IconButton style={{ position: 'absolute', top: 0, right: 0, backgroundColor: "white" }} icon="pencil" iconColor="green" size={20} />
            )
        }
    }

    return (
        <View>
            <Avatar.Image size={props.size} style={{ backgroundColor: "#92E3A9" }} source={Profile} />
            {showEditIcon()}
        </View>
    )
}

export default UserAvatar
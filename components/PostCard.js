import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const PostCard = (props) => {

    const { colors } = useTheme();





    return (
        <View style={styles.container}>
            <ImageBackground source={props.img} resizeMode='cover' style={styles.card}>
                <View style={{ flex: 1, justifyContent: 'flex-end', padding: 16 }}>
                    <Text style={{ color: colors.onBackground, fontSize: 24, fontWeight: 'bold' }}>{props.title}</Text>
                    <Text style={{ color: colors.onBackground, fontSize: 16 }}>{props.city}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
    },
    card: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
    }
})


export default PostCard
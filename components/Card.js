import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

const Card = (props) => {

    const { colors } = useTheme();
    const emojiDict = {
        'Route': {
            icon: '🗺️',
        },
        'Restaurant': {
            icon: '🥗',
        },
        'Events': {
            icon: '🎉',
        },
        'Nightlife': {
            icon: '🍺',
        },
        'Museum': {
            icon: '🏛️',
        },
        'Parks': {
            icon: '🏞️',
        },
        'Camping': {
            icon: '🏕️',
        },
        'Temples': {
            icon: '🕯️',
        },
        'Shopping': {
            icon: '🛍️',
        },
        'Beach': {
            icon: '🏖️',
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={props.img} resizeMode='cover' style={styles.card}>
                <View style={{ flex: 1, justifyContent: 'flex-end', padding: 16 }}>
                    <Text
                        style={{
                            color: colors.onBackground,
                            fontSize: 24,
                            fontWeight: 'bold',
                            textShadowColor: 'rgba(0, 0, 0, 0.85)', // Shadow color
                            textShadowOffset: { width: 2, height: 2 }, // Shadow offset
                            textShadowRadius: 2, // Shadow radius

                        }}
                    >
                        {props.title}
                    </Text>

                </View>

                <Text
                    style={{
                        fontSize: 36,
                        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
                        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
                        textShadowRadius: 2, // Shadow radius
                        margin: 8,
                    }}
                >
                    {emojiDict[props.category].icon}
                </Text>

            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 16,
        height: 250,
        width: 200,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
    }
})


export default Card
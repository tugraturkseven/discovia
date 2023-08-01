import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { IconButton, Text } from 'react-native-paper';


const Hero = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.ibb.co/qymJLJx/Trip-pana.png' }} style={styles.image}>
                <View style={styles.card}>
                    <View>
                        <Text variant='titleLarge' style={{ fontWeight: "600" }}>Explore The Beauty</Text>
                        <Text variant='labelLarge' style={{ color: "grey", paddingTop: 5 }}>Get special offers & discount</Text>
                    </View>
                    <IconButton icon="arrow-right" iconColor='white' style={styles.iconbutton} ></IconButton>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        justifyContent: "flex-end",
        gap: 16,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        opacity: 0.9,
        justifyContent: "space-between",
        padding: 24,
        borderRadius: 32,
        width: "100%",
        height: "30%",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
    },
    iconbutton: {
        backgroundColor: "orange",

    }
});

export default Hero
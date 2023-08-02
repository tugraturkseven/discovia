import { Dimensions, View, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { Text, Avatar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ListingCard = () => {
    const width = Dimensions.get('window').width;
    const giresun = [
        "https://cdn.goturkiye.com/giresun/see-desktop-kapak.jpg",
        "https://gezimingo.com/wp-content/uploads/2020/03/Giresun-Adasi-%C2%A9-Fotog%CC%86raf-Tayfun2909-Shutterstock-1024x575.jpg",
        "https://3.bp.blogspot.com/-tmBOrX83h-I/U-0lvodxIrI/AAAAAAAAJT0/12hsiU3EvOU/s1600/giresunmuseum7.jpg"
    ];
    const sinop = [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ea/52/68/photo1jpg.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/58/ea/77/caption.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/15/c1/42/her-mevsim-keyifli.jpg?w=1100&h=-1&s=1"
    ];
    const istanbul = [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/54/be/42/hagia-sophia-museum-by.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b8/8e/0f/caption.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8d/1c/7d/photo0jpg.jpg?w=1200&h=-1&s=1"
    ];
    return (
        <ScrollView>
            <View style={styles.card}>
                <Carousel
                    loop
                    width={width * 0.9}
                    height={width / 2}
                    data={giresun}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    renderItem={({ index }) => {
                        return (
                            <Image source={{ uri: giresun[index] }} style={{ width: width * 0.9, height: width / 2, borderRadius: 8 }} />
                        );
                    }}
                />
                <View style={styles.container}>
                    <View>
                        <Text variant='headlineSmall'>A Great Nature</Text>
                        <Text variant='labelLarge' style={styles.text}>Giresun, Turkey.</Text>
                    </View>
                    <View style={styles.fav}>
                        <FontAwesomeIcon icon="fa-regular fa-heart" />
                        <Text variant='labelLarge' style={styles.text}>4.5</Text>
                    </View>
                </View>
            </View >
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        justifyContent: "space-between",
        borderRadius: 16,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        zIndex: 3,
    },
    container: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: "grey",
    },
    fav: {
        flexDirection: 'row',
        alignItems: 'baseline',
    }
});

export default ListingCard
import { Dimensions, View, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { Text } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMountainCity, faBed, faCalendarDays, faCoins } from '@fortawesome/free-solid-svg-icons';

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

        <View>
            <View style={styles.card}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

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
                                <ImageBackground source={{ uri: giresun[index] }} style={{ width: width * 0.9, height: width / 2, borderRadius: 8 }} />
                            );
                        }}
                    />
                </View>

                <View style={styles.container}>
                    <View>
                        <Text variant='headlineSmall'>A Great Nature</Text>
                        <Text variant='labelLarge' style={styles.text}>Giresun, Turkey.</Text>
                    </View>
                    <View style={styles.fav}>
                        <FontAwesomeIcon icon={faHeart} size={16} color='green' style={{ marginRight: 8 }} />
                        <Text variant='labelLarge' style={styles.text}>4</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faMountainCity}></FontAwesomeIcon>
                        <Text>Nature</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
                        <Text>Hotel</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                        <Text>2 Days</Text>
                    </View>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                        <Text>350</Text>
                    </View>

                </View>

            </View >

            <View style={styles.card}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Carousel
                        loop
                        width={width * 0.9}
                        height={width / 2}
                        data={sinop}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.9,
                            parallaxScrollingOffset: 50,
                        }}
                        renderItem={({ index }) => {
                            return (
                                <Image source={{ uri: sinop[index] }} style={{ width: width * 0.9, height: width / 2, borderRadius: 8 }} />
                            );
                        }}
                    />
                </View>

                <View style={styles.container}>
                    <View>
                        <Text variant='headlineSmall'>Peaceful Place</Text>
                        <Text variant='labelLarge' style={styles.text}>Sinop, Turkey.</Text>
                    </View>
                    <View style={styles.fav}>
                        <FontAwesomeIcon icon={faHeart} size={16} color='green' style={{ marginRight: 8 }} />
                        <Text variant='labelLarge' style={styles.text}>5</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faMountainCity}></FontAwesomeIcon>
                        <Text>Nature</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
                        <Text>Hotel</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                        <Text>2 Days</Text>
                    </View>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                        <Text>350</Text>
                    </View>

                </View>

            </View >

            <View style={styles.card}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Carousel
                        loop
                        width={width * 0.9}
                        height={width / 2}
                        data={istanbul}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.9,
                            parallaxScrollingOffset: 50,
                        }}
                        renderItem={({ index }) => {
                            return (
                                <Image source={{ uri: istanbul[index] }} style={{ width: width * 0.9, height: width / 2, borderRadius: 8 }} />
                            );
                        }}
                    />
                </View>

                <View style={styles.container}>
                    <View>
                        <Text variant='headlineSmall'>Heaven in the World</Text>
                        <Text variant='labelLarge' style={styles.text}>Istanbul, Turkey.</Text>
                    </View>
                    <View style={styles.fav}>
                        <FontAwesomeIcon icon={faHeart} size={16} color='green' style={{ marginRight: 8 }} />
                        <Text variant='labelLarge' style={styles.text}>9</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faMountainCity}></FontAwesomeIcon>
                        <Text>City</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
                        <Text>Hotel</Text>
                    </View>

                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                        <Text>8 Days</Text>
                    </View>
                    <View style={styles.summary}>
                        <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                        <Text>3550</Text>
                    </View>

                </View>

            </View >
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginBottom: 16,

    },
    container: {
        marginHorizontal: 16,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: "grey",
    },
    fav: {
        flexDirection: 'row',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 70,
        marginVertical: 8,
    },
});

export default ListingCard
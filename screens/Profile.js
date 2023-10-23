import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import React, { useState, useRef } from 'react'
import { useTheme, Text, Button } from 'react-native-paper'
import PostedCategory from '../components/PostedCategory'
import UserAvatar from '../components/UserAvatar'
import PostCard from '../components/PostCard'
import { MaterialIcons } from '@expo/vector-icons';


const Profile = () => {
    const { colors } = useTheme();

    const giresun = { uri: 'https://cdn.goturkiye.com/giresun/see-desktop-kapak.jpg' };
    const restaurant = { uri: 'https://algedra.com.tr/assets/imgs/upload2/Sophisticated%20Restaurant%20Design/imagesforwebsite92_62df98aa3887a.jpg' };
    const concert = { uri: 'https://images.themagger.net/wp-content/uploads/2019/01/Istanbul-Konserleri-633x433.jpeg' };
    const pub = { uri: 'https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg' };
    const yerebatanSarnici = { uri: 'https://yerebatan.com/wp-content/uploads/2022/12/yerebatan-sergi-ogu6525-min-JlPk-scaled-1.jpg' };
    const boluAbant = { uri: 'https://cdn.seturday.com/content/uploads/makale_resimleri/kapak/sonbahar-deyince-akla-gelen-abant-golu-tabiat-parki-bolu-290d6747-4dce-49da-bf53-4d9d7c7243a5banner.jpg' };


    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 115],
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`],
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                useNativeDriver: false,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            }).start(() => {
                setOpen(false);
            });
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                useNativeDriver: false,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            }).start(() => {
                setOpen(true);
            });
        }
    };


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            <View style={[styles.userSection, { borderBottomWidth: 1, borderBottomColor: colors.backdrop }]}>

                <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                    <View style={{ flex: 1 }}>
                        <UserAvatar size={96} />
                    </View>

                    <View style={{ flex: 2, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>28</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Posts</Text>
                            </View>
                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>453</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Followers</Text>
                            </View>
                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>873</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Following</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', paddingVertical: 8 }}>
                            <Text variant='titleMedium' style={{ color: colors.onBackground }}>Tugra Turkseven</Text>
                            <Text variant='bodyMedium' style={{ color: colors.outline }}>@tugraturkseven</Text>
                        </View>

                    </View>


                </View>


                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: 16 }}>
                    <Text variant='bodyLarge' style={{ color: colors.onBackground }}>A software engineer who likes to travel around. 🛫</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Edit Profile</Button>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Share Profile</Button>
                    <TouchableWithoutFeedback onPress={() => toggleListItem()}>
                        <View style={[styles.arrowContainer, {
                            borderWidth: 1,
                            borderColor: colors.backdrop,
                            backgroundColor: colors.backdrop,
                            borderRadius: 8,
                        }]}>
                            <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                                <MaterialIcons name="filter-list" size={20} color={colors.onBackground} />
                            </Animated.View>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <Animated.View style={{ height: bodyHeight }}>
                    <PostedCategory ></PostedCategory>
                </Animated.View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <PostCard img={giresun} title='Karadeniz Turu' city='Giresun, Turkey.' category='Route' />
                <PostCard img={restaurant} title='Boğazda Yemek' city='Istanbul, Turkey.' category='Restaurant' />
                <PostCard img={concert} title='Duman' city='Marmaris, Turkey.' category='Events' />
                <PostCard img={pub} title='Beerhall' city='Eskişehir, Turkey.' category='Nightlife' />
                <PostCard img={yerebatanSarnici} title='Yerebatan Sarnıcı' city='Istanbul, Turkey.' category='Museum' />
                <PostCard img={boluAbant} title='Abant Gölü' city='Bolu, Turkey.' category='Parks' />
            </ScrollView>


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
        flex: 4,
        marginHorizontal: 8,
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: '500'
    },
    arrowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25
    },
})

export default Profile
import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useTheme, Text, Button } from 'react-native-paper'
import PostedCategory from '../components/PostedCategory'
import UserAvatar from '../components/UserAvatar'
import PostCard from '../components/PostCard'
const Profile = () => {
    const { colors } = useTheme();

    const giresun = { uri: 'https://cdn.goturkiye.com/giresun/see-desktop-kapak.jpg' };
    const restaurant = { uri: 'https://algedra.com.tr/assets/imgs/upload2/Sophisticated%20Restaurant%20Design/imagesforwebsite92_62df98aa3887a.jpg' };
    const concert = { uri: 'https://images.themagger.net/wp-content/uploads/2019/01/Istanbul-Konserleri-633x433.jpeg' };
    const pub = { uri: 'https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg' };
    const yerebatanSarnici = { uri: 'https://yerebatan.com/wp-content/uploads/2022/12/yerebatan-sergi-ogu6525-min-JlPk-scaled-1.jpg' };
    const boluAbant = { uri: 'https://cdn.seturday.com/content/uploads/makale_resimleri/kapak/sonbahar-deyince-akla-gelen-abant-golu-tabiat-parki-bolu-290d6747-4dce-49da-bf53-4d9d7c7243a5banner.jpg' };

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            <View style={[styles.userSection, { borderBottomWidth: 1, borderBottomColor: colors.backdrop }]}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flex: 1 }}>
                        <UserAvatar size={96} />
                    </View>

                    <View style={{ flex: 2, flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>

                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>6</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Posts</Text>
                            </View>
                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>3</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Followers</Text>
                            </View>
                            <View>
                                <Text variant='titleMedium' style={[styles.textStyle, { color: colors.onBackground }]}>10</Text>
                                <Text variant='bodyMedium' style={[styles.textStyle, { color: colors.onBackground }]}>Following</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', paddingVertical: 8 }}>
                            <Text variant='titleLarge' style={{ color: colors.onBackground }}>Tugra Turkseven</Text>
                            <Text variant='titleSmall' style={{ color: colors.outline }}>@tugraturkseven</Text>
                        </View>

                    </View>


                </View>


                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingVertical: 16 }}>
                    <Text variant='bodyLarge' style={{ color: colors.onBackground }}>A software engineer who likes to travel around. 🛫</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Edit Profile</Button>
                    <Button mode='contained' textColor={colors.onBackground} style={[styles.profileButtons, { backgroundColor: colors.backdrop }]} >Share Profile</Button>
                </View>
                <PostedCategory></PostedCategory>
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
        flex: 1,
        marginHorizontal: 8,
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: '500'
    }

})

export default Profile
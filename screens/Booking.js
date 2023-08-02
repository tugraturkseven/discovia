import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, Searchbar } from 'react-native-paper'
import { useState } from 'react';
import ListingCard from '../components/ListingCard';


const Booking = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text variant='displaySmall' style={{ color: "green" }}>Travisor</Text>
            </View>
            <View>
                <Searchbar
                    placeholder="Where?"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                />
            </View>
            <View>
                <ListingCard />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        backgroundColor: "white",
    },
    header: {
        margin: 16,
        alignItems: "center",
    },
    searchbar: {
        margin: 16,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.20,
    },
});


export default Booking
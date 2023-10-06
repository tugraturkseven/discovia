import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Text, Searchbar, Button } from 'react-native-paper'
import { useState } from 'react';
import ListingCard from '../components/ListingCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';

const Discover = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Button style={{ margin: 0, padding: 0 }} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} style={{ color: 'green' }} />
                </Button>
                <Text variant='displaySmall' style={{ color: "green", }}>Travisor</Text>
                <Button style={{ margin: 0, padding: 0 }}>
                    <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'green' }} />
                </Button>
            </View>
            <View>
                <Searchbar
                    placeholder="Where?"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                />
            </View>
            <ScrollView>
                <ListingCard />
            </ScrollView>
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
        flexDirection: "row",
        margin: 16,
        alignItems: "center",
        justifyContent: "space-between",
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


export default Discover
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Text, Searchbar } from 'react-native-paper'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTreeCity, faCity, faBuilding, faTree, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'

const Share = () => {

    const [value, setValue] = useState('left');

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text variant='headlineMedium'> Share Your Experience</Text>
            </View>
            <View style={styles.section}>
                <Text variant='titleLarge'>📍 Location</Text>
                <Searchbar
                    placeholder="Where?"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchbar}
                />
            </View>
            <View style={styles.section}>
                <Text variant='titleLarge'>🎉 Vacation Type</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                    <FontAwesomeIcon icon={faTreeCity} size={32} color='green' />
                    <FontAwesomeIcon icon={faCity} size={32} color='grey' />
                    <FontAwesomeIcon icon={faBuilding} size={32} color='grey' />
                    <FontAwesomeIcon icon={faTree} size={32} color='grey' />
                    <FontAwesomeIcon icon={faUmbrellaBeach} size={32} color='grey' />
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    section: {
        padding: 16,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchbar: {
        marginTop: 16,
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



export default Share
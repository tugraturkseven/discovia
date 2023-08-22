import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Text, Searchbar, TextInput, IconButton, Button } from 'react-native-paper'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTreeCity, faCity, faBuilding, faTree, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Share = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.title}>
                    <Text variant='headlineMedium'> Share Your Experience</Text>
                </View>
                <View style={styles.section}>
                    <Text variant='titleLarge'>🌍 Destination</Text>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <View>
                        <Text variant='titleLarge' style={{ paddingBottom: 8 }}>💯 Rate</Text>
                        <TextInput
                            label="Rate"
                            numeric
                            keyboardType={'numeric'}
                            backgroundColor='white'
                        />
                    </View>
                    <View>
                        <Text variant='titleLarge' style={{ paddingBottom: 8 }}>💸 Budget</Text>
                        <TextInput
                            label="Amount"
                            numeric
                            keyboardType={'numeric'}
                            backgroundColor='white'
                            theme={''}
                        />
                    </View>
                    <View>
                        <Text variant='titleLarge' style={{ paddingBottom: 8 }}>🌖 Time</Text>
                        <TextInput
                            label="Days"
                            numeric
                            keyboardType={'numeric'}
                            backgroundColor='white'
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text variant='titleLarge' style={{ paddingBottom: 8 }}>🌇 Photos</Text>
                    <IconButton
                        icon={'plus'}
                        size={20}
                        onPress={() => console.log('Pressed')}
                        mode='outlined'
                    />
                </View>
                <View style={styles.section}>
                    <Text variant='titleLarge'>📝 Description</Text>
                    <TextInput
                        label="Tell us about your memories!"
                        backgroundColor='white'
                    />
                </View>
                <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button
                        icon={'content-save'}
                        mode='outlined'
                        onPress={() => console.log('Pressed')}
                        buttonColor='white'
                        textColor='green'
                    >
                        Save
                    </Button>
                    <Button
                        icon={'share'}
                        mode='contained'
                        onPress={() => console.log('Pressed')}
                        buttonColor='green'
                        textColor='white'
                    >
                        Share
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView >

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
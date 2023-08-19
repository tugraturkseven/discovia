import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Text, ToggleButton } from 'react-native-paper'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faTreeCity, faCity, faBuilding, faTree } from '@fortawesome/free-solid-svg-icons'

const Share = () => {

    const [value, setValue] = useState('left');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text variant='headlineMedium'>Share Your Experience</Text>
            </View>
            <View style={styles.section}>
                <Text variant='titleLarge'>Vacation Type</Text>
                <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                    <FontAwesomeIcon icon={faTreeCity} size={48} />
                    <FontAwesomeIcon icon={faCity} size={48} />
                    <FontAwesomeIcon icon={faBuilding} size={48} />
                    <FontAwesomeIcon icon={faTree} size={48} />
                </ToggleButton.Row>
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
    }
});



export default Share
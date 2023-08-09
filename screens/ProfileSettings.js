import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, IconButton, Switch } from 'react-native-paper'
import { faCircleUser, faBell, faMoon, faLifeRing } from '@fortawesome/free-regular-svg-icons'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const ProfileSettings = () => {
    return (
        <SafeAreaView style={styles.general}>
            <View style={{ margin: 16 }}>
                <View style={styles.label}>
                    <Text variant='displayLarge'>Settings</Text>
                </View>
                <View style={styles.label}>
                    <Text variant='displaySmall'>Account</Text>
                    <View style={styles.section_container}>
                        <FontAwesomeIcon icon={faCircleUser} size={48} color='#d9d9d9' style={{ marginRight: 8 }} />
                        <View>
                            <Text variant='headlineMedium' style={{ fontWeight: 500 }}>Tugra Turkseven</Text>
                            <Text variant='titleMedium' style={{ color: 'grey' }}>Personal Info</Text>
                        </View>
                        <IconButton icon='greater-than' style={styles.button} />
                    </View>
                </View>
                <View style={styles.label}>
                    <Text variant='displaySmall'>Application</Text>

                    <View style={styles.section_container}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faEarthEurope} size={32} color='orange' style={{ marginRight: 16 }} />
                            <Text variant='headlineMedium'>Language</Text>
                        </View>
                        <IconButton icon='greater-than' style={styles.button} />
                    </View>
                    <View style={styles.section_container}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faBell} size={32} color='lightblue' style={{ marginRight: 16 }} />
                            <Text variant='headlineMedium'>Notifications</Text>
                        </View>

                        <IconButton icon='greater-than' style={styles.button} />
                    </View>

                    <View style={styles.section_container}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faLifeRing} size={32} color='pink' style={{ marginRight: 16 }} />
                            <Text variant='headlineMedium'>Help</Text>
                        </View>

                        <IconButton icon='greater-than' style={styles.button} />
                    </View>
                    <View style={styles.section_container}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faMoon} size={32} color='purple' style={{ marginRight: 16 }} />
                            <Text variant='headlineMedium'>Dark Mode</Text>
                        </View>
                        <Switch value={false} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    general: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    label: {
        padding: 16,
        fontWeight: 'bold',
    },
    section_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
    },
    button: {
        color: 'black',
        backgroundColor: '#ebebeb',
        width: 48,
        height: 48,
    },
    icon: {
        marginRight: 8,
    }
});
export default ProfileSettings
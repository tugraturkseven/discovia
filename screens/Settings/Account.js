import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { List, Text, Button, TextInput } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../components/UserAvatar';
import React, { useState } from 'react'

const Account = ({ navigation }) => {

    const [name, setName] = useState('Tuğra Türkseven')
    const [userName, setUsername] = useState('tugraturkseven');
    const [userEmail, setUserEmail] = useState('tugraturkseven@hotmail.com');
    const [userPhone, setUserPhone] = useState('+90 555 555 55 55');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Button style={{ margin: 0, padding: 0 }} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={24} style={{ color: 'green' }} />
                </Button>
                <Text variant='displaySmall' style={{ color: "green", }}>Travisor</Text>
                <Button style={{ margin: 0, padding: 0 }}>
                    <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
                </Button>
            </View>

            <View style={styles.profile}>
                <UserAvatar size={128} editable={true}></UserAvatar>
                <View style={{ flexDirection: 'column', paddingHorizontal: 16, justifyContent: 'space-evenly', width: '70%', }}>
                    <Text variant='titleMedium'>Profile Photo</Text>
                    <Text variant='bodyMedium'>Upload a photo so your friends can recognize you</Text>
                    <Button mode='contained' style={{ backgroundColor: 'green' }}>Manage your photo</Button>
                </View>

            </View>
            <View style={styles.section}>
                <Text variant='titleLarge'>Contact</Text>
                <List.Section>
                    <List.Item
                        title='Personal Information'
                        description='Name, birthday, gender and more'
                        left={props => <Text {...props} variant='displaySmall'>👤</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title='Username'
                        description='@tugraturkseven'
                        left={props => <Text {...props} variant='displaySmall'>🤖</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Email"
                        description="tugraturkseven@travisor.com"
                        left={props => <Text {...props} variant='displaySmall'>📪</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Phone"
                        description="+90 555 555 55 55"
                        left={props => <Text {...props} variant='displaySmall'>☎️</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>
                <Text variant='titleLarge'>Security</Text>
                <List.Section>
                    <List.Item
                        title='Password'
                        description='Change your password'
                        left={props => <Text {...props} variant='displaySmall'>🔒</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>
                <Text variant='titleLarge'>Data</Text>
                <List.Section>
                    <List.Item
                        title='Delete Account'
                        description='Delete your account'
                        left={props => <Text {...props} variant='displaySmall'>💔</Text>}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                </List.Section>

            </View>


        </SafeAreaView >
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
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
    },
    section: {
        padding: 16,
        flexDirection: 'column',

    }
});

export default Account
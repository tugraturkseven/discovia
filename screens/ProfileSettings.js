import { View, SafeAreaView } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const ProfileSettings = () => {
    return (
        <SafeAreaView>
            <View>
                <Text variant='displayLarge'>Settings</Text>
            </View>
            <View>
                <Text variant='displaySmall'>Account</Text>
                <View>
                    <FontAwesomeIcon icon={faCircleUser} size={64} color='grey' style={{ marginRight: 8 }} />
                    <Text variant='headlineMedium'>Tugra Turkseven</Text>
                    <Text variant='titleMedium'>Personal Info</Text>
                    <Button icon='arrow-right-thick' />
                </View>
            </View>
            <View>
                <Text variant='displaySmall'>Application</Text>
                <View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default ProfileSettings
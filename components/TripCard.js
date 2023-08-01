import { View, StyleSheet, ScrollView } from 'react-native'
import { ImageBackground } from 'react-native'
import { Text, Avatar } from 'react-native-paper'

const TripCard = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.ibb.co/BBPhT8K/cowboy-on-horse-bro.png' }} style={styles.image}>
                    <View style={styles.badge}>
                        <Text style={{
                            fontWeight: "700",
                            color: "darkorange",
                        }} >$250</Text>
                    </View>
                </ImageBackground>
                <Text variant='titleLarge' style={{ fontWeight: "bold", marginLeft: 5 }}>Texas</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Icon icon={"map-marker-radius-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>United States</Text>
                    <Avatar.Icon icon={"star-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>4</Text>
                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.ibb.co/q5pKR7f/San-Francisco-bridge-bro.png' }} style={styles.image}>
                    <View style={styles.badge}>
                        <Text style={{
                            fontWeight: "700",
                            color: "darkorange",
                        }} >$450</Text>
                    </View>
                </ImageBackground>
                <Text variant='titleLarge' style={{ fontWeight: "bold", marginLeft: 5 }}>San Fransisco</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Icon icon={"map-marker-radius-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>United States</Text>
                    <Avatar.Icon icon={"star-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>5</Text>
                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.ibb.co/WVgx1gR/City-skyline-pana.png' }} style={styles.image}>
                    <View style={styles.badge}>
                        <Text style={{
                            fontWeight: "700",
                            color: "darkorange",
                        }} >$150</Text>
                    </View>
                </ImageBackground>
                <Text variant='titleLarge' style={{ fontWeight: "bold", marginLeft: 5 }}>New York</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar.Icon icon={"map-marker-radius-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>United States</Text>
                    <Avatar.Icon icon={"star-outline"} size={24} style={{ backgroundColor: "white" }} />
                    <Text variant='labelMedium' style={styles.text}>4</Text>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    image: {
        width: 150,
        height: 150,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    text: {
        color: "grey",
        paddingTop: 5
    },
    badge: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        height: 32,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
    }
});
export default TripCard
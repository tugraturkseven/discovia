import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme, Checkbox, List, Button } from 'react-native-paper'

const DeleteAccount = () => {
    const { colors } = useTheme();
    const [content, setContent] = useState('unchecked');
    const [design, setDesign] = useState('unchecked');
    const [features, setFeatures] = useState('unchecked');
    const [performance, setPerformance] = useState('unchecked');
    const [price, setPrice] = useState('unchecked');
    const [support, setSupport] = useState('unchecked');
    const [other, setOther] = useState('unchecked');

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant='titleLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5 }}>
                In this page, you can delete your account and all your data. Please be careful, this action cannot be undone.
            </Text>
            <Text variant='labelLarge' style={{ textAlign: 'center', color: colors.onBackground, opacity: 0.5, marginTop: 16 }}>
                Why do you want to delete your account?
            </Text>
            <List.Section style={{ padding: 16 }}>
                <List.Item
                    title='Content'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Content is not qualified</Text>}
                    onPress={() => setContent(content === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>💎</Text>}
                    right={() => <Checkbox status={content} />}
                />
                <List.Item
                    title='Design'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Design is complicated and not user friendly</Text>}
                    onPress={() => setDesign(design === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>🖼️</Text>}
                    right={() => <Checkbox status={design} />}
                />
                <List.Item
                    title='Features'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Features are not satisfying</Text>}
                    onPress={() => setFeatures(features === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>⚙️</Text>}
                    right={() => <Checkbox status={features} />}
                />
                <List.Item
                    title='Performance'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>I don't like the performance</Text>}
                    onPress={() => setPerformance(performance === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>⚡</Text>}
                    right={() => <Checkbox status={performance} />}
                />
                <List.Item
                    title='Price'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Prices are expensive</Text>}
                    onPress={() => setPrice(price === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>💳</Text>}
                    right={() => <Checkbox status={price} />}
                />
                <List.Item
                    title='Support'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>Support services are not enough</Text>}
                    onPress={() => setSupport(support === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>🤖</Text>}
                    right={() => <Checkbox status={support} />}
                />
                <List.Item
                    title='Other'
                    description={() => <Text variant='labelLarge' style={{ color: colors.onBackground, opacity: 0.5 }}>The reason is not listed</Text>}
                    onPress={() => setOther(other === 'checked' ? 'unchecked' : 'checked')}
                    left={() => <Text variant='displaySmall' style={{ color: colors.onBackground }}>🎒</Text>}
                    right={() => <Checkbox status={other} />}
                />
            </List.Section>

            <Button onPress={() => alert('Account is deleted.')} style={{ opacity: 0.5, }}>Delete your account</Button>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default DeleteAccount
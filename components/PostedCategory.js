import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'


const PostedCategory = () => {
    const categoryList = {
        'Route': {
            icon: '🗺️',
        },
        'Restaurant': {
            icon: '🥗',
        },
        'Events': {
            icon: '🎉',
        },
        'Nightlife': {
            icon: '🍺',
        },
        'Museum': {
            icon: '🏛️',
        },
        'Parks': {
            icon: '🏞️',
        },
        'Camping': {
            icon: '🏕️',
        },
        'Temples': {
            icon: '🕯️',
        },
        'Shopping': {
            icon: '🛍️',
        },
        'Beach': {
            icon: '🏖️',
        }
    }

    const { colors } = useTheme();

    const renderCategories = () => {
        return Object.keys(categoryList).map((key, index) => {
            return (
                <View key={index} style={[styles.category, { backgroundColor: colors.backdrop }]}>
                    <Text style={styles.icon}>{categoryList[key].icon}</Text>
                    <Text style={[styles.categoryText, { color: colors.onBackground }]}>{key}</Text>
                </View>
            )
        })
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.container} >
                {renderCategories()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 16,
    },
    icon: {
        fontSize: 48,
        textAlign: "center",
    },
    categoryText: {
        fontSize: 16,
        textAlign: "center",
    },
    category: {
        padding: 8,
        margin: 8,
        borderRadius: 8,
        width: 90,
    },

})

export default PostedCategory
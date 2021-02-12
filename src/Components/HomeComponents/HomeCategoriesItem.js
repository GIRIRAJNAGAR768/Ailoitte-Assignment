import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const HomeCategoriesItem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            <View style={styles.container}>
                <Image source={item.pic} style={{ width: 50, height: 50 }} />
                <Text style={{ color: 'gray', fontWeight: "bold" }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.23,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    }
})

export default HomeCategoriesItem

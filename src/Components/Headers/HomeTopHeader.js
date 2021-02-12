import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import assetsData from '../../Data/assetsData'

const HomeTopHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.personImageView}>
                <Image source={assetsData.PERSON} style={styles.personImage} />
            </View>
            <Text style={styles.headTxt}>Welcome to 86</Text>
            <View style={{ ...styles.personImageView, height: 40, width: 40 }}>
                <Image source={assetsData.NOTIFICATION} style={{ ...styles.personImage, height: 35, width: 35 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    personImageView: {
        height: 46,
        width: 46,
        padding: 5,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
    },
    personImage: {
        height: 42,
        width: 42,
    },
    headTxt:{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'gray' 
    }
})

export default HomeTopHeader

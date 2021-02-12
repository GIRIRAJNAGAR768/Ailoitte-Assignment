import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import assetsData from '../../Data/assetsData'

const HomeToProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={assetsData.ICON1} style={{width:25,height:25,marginHorizontal:5}}/>
            <View style={{flex:1,marginHorizontal:10}}>
                <Text style={{fontSize:15,fontWeight:"bold"}}>Complete your Profile</Text>
                <Text style={{color:'gray'}}>Order to complete your registration kindly upload your profile.</Text>
            </View>
            <Image source={assetsData.ICON2} style={{width:25,height:25,marginHorizontal:5}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:20,
        justifyContent:'space-around',
        borderRadius:10,
        backgroundColor:'#f9e6bebd',
        padding:20
    }
})

export default HomeToProfile

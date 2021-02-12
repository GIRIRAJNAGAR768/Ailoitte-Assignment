import React from 'react'
import { View, Text,StyleSheet,TextInput,Image ,TouchableNativeFeedback} from 'react-native'
import assetsData from '../../Data/assetsData'

const SearchFilterHome = ({value,onChangeValue,onPressFilter}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={assetsData.SEARCH} style={{width:25,height:25,marginHorizontal:5}}/>
                <TextInput
                    placeholder="Search Here"
                    style={{ height: 45,flex:1,marginHorizontal:5 }}
                    onChangeText={text => onChangeValue(text)}
                    value={value}
                />
            </View>
            <TouchableNativeFeedback onPress={()=> onPressFilter()}>
            <View style={styles.iconView}>
                <Image source={assetsData.FILTER} style={styles.iconStyle}/>
            </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    innerContainer:{
        flex:1,
        height:55,
        marginRight:10,
        borderRadius:15,
        backgroundColor:'#f2f2f2',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconView:{
        height:55,
        width:55,
        padding:5,
        backgroundColor:'#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle:{
        height:55,
        width:55,
    }, 
})

export default SearchFilterHome

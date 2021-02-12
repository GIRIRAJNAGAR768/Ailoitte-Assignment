import React from 'react'
import { View, Text,StyleSheet,StatusBar,ScrollView,Image, FlatList, Dimensions,TouchableOpacity } from 'react-native'
import HomeTopHeader from '../Components/Headers/HomeTopHeader'
import SearchFilterHome from '../Components/HomeComponents/SearchFilterHome'
import HomeToProfile from '../Components/HomeComponents/HomeToProfile'
import HomeCategoriesItem from '../Components/HomeComponents/HomeCategoriesItem'
import {dummyAction} from '../Actions/HomeScreenActions'
import {connect} from 'react-redux'

const {height,width} = Dimensions.get('window')

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue:'',
            carouselImageData:[],
            carouselCurrentIndex:0,
            categoriesData:[]
        }
    }

    componentDidMount()
    {
        // getting data from Reducer........
        let data = this.props.data;

        this.setState({
            carouselImageData:data.carouselImageData,
            categoriesData:data.categoriesData
        })
        // console.log(this.props.data)
    }

    renderItem = (item) =>{
        return(
            <Image source={item} style={{height:width*0.6}}/>
        )
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        let currentIndex = viewableItems[0].index;
        this.setState({carouselCurrentIndex:currentIndex})
      }

    render(){
      return (
        <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
        {/* Home Header........ */}
            <HomeTopHeader />

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginTop:20}}>
                <Text style={{marginVertical:20,color:'gray'}}>find your daily goods</Text>
                <SearchFilterHome value={this.state.searchValue} onChangeValue={(newValue)=> {
                    this.setState({searchValue:newValue})
                }}
                onPressFilter={()=> {
                    alert("Filter pressed.")
                }}
                />

                {/* Complete your profile.......container */}
               <HomeToProfile />

                {/* Image carousel........... */}
                <View style={{marginVertical:20}}>
                    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>Promotions</Text>
                        <Text style={{color:'#000'}}>See all</Text> 
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={{
                        itemVisiblePercentThreshold: 50
                        }}
                        horizontal
                        data={this.state.carouselImageData}
                        renderItem={({item,index}) => this.renderItem(item)}
                        keyExtractor={(item, index) => index}
                    />
                    {/* List footer */}
                    <View style={styles.listFooterView}>
                        {this.state.carouselImageData.map((item,index)=>{
                            return(
                                <View style={{...styles.dotView,backgroundColor:index==this.state.carouselCurrentIndex?"#000000fc":"#00000059"}}></View>
                            )
                        })}
                    </View>
                   
                   {/* Categories list.................. */}
                    
                    <View style={styles.catView}>
                        {this.state.categoriesData.map((item, index)=>
                          <HomeCategoriesItem item={item}/>
                        )}
                    </View>
                   
                </View>
            </View>
            </ScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        padding:10
    },
    listFooterView:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:-50
    },
    dotView:{
        width:10,
        height:10,
        borderRadius:5,
        margin:2
    },
    catView:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:30
    }
})

const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = (dispatch) =>{
    return{
        dummyAction:(payload) =>{dispatch(dummyAction(payload))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen) 

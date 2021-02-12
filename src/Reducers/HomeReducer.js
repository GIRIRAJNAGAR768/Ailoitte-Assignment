import assetsData from '../Data/assetsData'

let homeScreenData = {
    carouselImageData:[
        assetsData.BANNER,
        assetsData.BANNER,
        assetsData.BANNER
    ],

    categoriesData:[
        {name:"Vegetables",pic:assetsData.VEGETABLES},
        {name:"Fruits",pic:assetsData.FRUITS},
        {name:"Cleaning",pic:assetsData.CLEANING},
        {name:"Grocery",pic:assetsData.GROCERY},
        {name:"Oils",pic:assetsData.OILS},
        {name:"Meat",pic:assetsData.MEATS},
        {name:"Fish",pic:assetsData.FISH},
        {name:"Spice",pic:assetsData.SPICES},
    ]
}   

export default function homeReducer(state=homeScreenData,action){
    switch(action.type){
        case "DummyAction":
            return {...state}
    }
    return state
}
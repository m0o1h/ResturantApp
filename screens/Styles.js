import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    simpleContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#003348',
    },

    // Splash Screen
    splashIcon:{
        marginTop:150,
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    splashDiscountImage:{
        width:'90%', 
        height:'20%', 
        borderRadius:20,
        marginTop:400,
    },


    // Menu Screen
    mainTopImageContainer:{
        backgroundColor:'green',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        width:'100%',
        height:'10%',
        marginTop:45,
    },
    mainTopCartIcon:{
        position:'absolute',
        top:8,
        right:15,
    },
    mainTopBackIcon:{
        marginLeft:20, 
        position:'absolute'
    },
    mainTopImage:{
        width:'100%', 
        height:'100%', 
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    mainTopImageText:{
        color:'white',
        position:'absolute',
        fontSize:30,
        fontWeight:'bold',
        bottom:5,
        alignSelf:'center'
    },
    mainFoodCategoryText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:15,
    },
    mainFlatListInnerContainer:{
        width:200, 
        height:180, 
        margin:5,
        borderRadius:20,
        alignItems:'center',
    },
    mainFlatListImage:{
        width:'100%',
        height:'60%',
        borderRadius:20,
    },
    mainFlatListText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
    mainFlatListTouchable:{
        backgroundColor:'orange',
        borderRadius:5,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    menuItemSearchBar:{
        width:'95%',
        padding:10,
        borderRadius:5,
        backgroundColor:'white',
      },

    // Details Screen
    detailsContainer:{
        width:width,
        height:'90%',
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    detailsMoveBackIcon:{
        alignSelf:'flex-start',
        marginLeft:20,
        bottom:15
    },
    detailsMainHeadingText:{
        width:'95%',
        color:'black',
        fontWeight:'bold',
        margin:10,
        fontSize:30, 
        alignSelf:'center', 
        backgroundColor:'orange', 
        borderRadius:5, 
        padding:10,
        elevation:10,
    },
    detailsText:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        margin:10,
    },


    //Home Screen
    homeHeader:{
        backgroundColor:'white',
        width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    homeHeaderImage:{

        position:'absolute',
        left:20,
        top:35,
        width:40,
        height:40,
    },
    homeHeaderText:{
        color:'black',
        position:'absolute',
        left:65,
        top:40,
        fontSize:20,
        fontWeight:'bold',
    },
    homeHeaderUserIcon:{
        position:'absolute',
        right:25,
        top:45,
    },
    homeTopNameContainer:{
        backgroundColor:'#E6F8FF',
        width:'92%',
        height:'8%',
        margin:15,
        padding:5,
        borderRadius:5,
        justifyContent:'center',
    },
    homeTopNameText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center',
    },
    homeTopBigTouchable:{
        backgroundColor:'#6BA9FF',
        borderRadius:5,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'70%',
        height:'7%',
        margin:10,
    },
    homeTopBigTouchableText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
    },
    homeTouchanleListContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    },
    homeTouchanleList:{
        backgroundColor:'orange',
        borderRadius:5,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'44%',
        height:'10%',
        margin:10,
        marginVertical:20,
    },

    // Final Order Slip Screen
      orderScreenFlatlistContainer:{
        backgroundColor:'#DAEAFF',
        margin:10,
        borderRadius:5,
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        elevation:10,
      },

    //   incrementDecrementItemNoContainer:{
    //     flexDirection:'row',
    //     backgroundColor:'grey',
    //   },
    //   incrementDecrementItemNo:{
    //     marginHorizontal:6,
    //   },

});

export {styles};
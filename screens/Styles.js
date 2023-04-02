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

    mainTopImageContainer:{
        backgroundColor:'green',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        width:'100%',
        height:'35%'
    },
    mainTopCartIcon:{
        position:'absolute',
        top:40,
        right:15,
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
        color:'black',
        fontWeight:'bold',
        margin:10,
        fontSize:30, 
        alignSelf:'center', 
        backgroundColor:'orange', 
        borderRadius:5, 
        padding:10
    },
    detailsText:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        margin:10,
    },
});

export {styles};
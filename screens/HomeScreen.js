import React,{useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import SplashScreen from './SplashScreen';
import { styles } from './Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ArrayOfOrderedData} from '../Recoil/GlobalVariables';
import { useRecoilState } from 'recoil';

const Splash=({navigation})=>{
    return(
        <View style={{flex:1}} >
            <SplashScreen />
        </View>
    )
}


const Main=({navigation})=>{
    const [name, setName] = useRecoilState(ArrayOfOrderedData);

    const [burgerData, setBurgerData] = useState([
        { id:1, name:"Small", price:"100", uri:"https://b.zmtcdn.com/data/pictures/2/19945362/02d7e0c1cfc9c0ed7702fa9b4c068ff2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", },
        { id:2, name:"Medium", price:"200", uri:"https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886", },
        { id:3, name:"Large", price:"300", uri:"https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg", },
    ])

    const [pizzaData, setPizzaData] = useState([
        { id:1, name:"Small", price:"250", uri:"https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg", },
        { id:2, name:"Medium", price:"420", uri:"https://poracaso.com/wp-content/uploads/2022/09/shutterstock-84904912-1024x683.jpg", },
        { id:3, name:"Large", price:"550", uri:"https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg", },
    ])

    const detailsScreen = () =>{
        navigation.navigate('DetailsScreen')
    }
    

    const addItems = (item) =>{
        const orderDetails = [];
        const itemName =item.name;
        const itemPrice =item.price;
        const itemUri =item.uri;
        orderDetails.push({
            name:itemName,
            price:itemPrice,
            uri:itemUri,
        });
        setName([...name, orderDetails]);
    }

    return(
        <View style={styles.container} >
            <View style={styles.mainTopImageContainer} >
                <Image source={{uri:"https://cdn.siasat.com/wp-content/uploads/2022/02/Untitled-design-58-1.png"}} style={styles.mainTopImage} ></Image>
                <Text style={styles.mainTopImageText} >Different Kind of Food</Text>
                <TouchableOpacity
                style={styles.mainTopCartIcon}
                onPress={detailsScreen}
                >
                <Entypo name="shopping-bag" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <Text style={styles.mainFoodCategoryText} >Burgers _______________________________</Text>
            <FlatList
            data={burgerData}
            horizontal={true}
            keyExtractor={(data)=>data.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item: data})=>{
            return(
                <View style={styles.mainFlatListInnerContainer} >
                    <Image source={{uri:data.uri}} style={styles.mainFlatListImage} ></Image>
                    <Text style={styles.mainFlatListText} >Size: {data.name}</Text>
                    <Text style={styles.mainFlatListText} >Price: Rs.{data.price}</Text>
                    <TouchableOpacity
                    onPress={()=>addItems(data)}
                    style={styles.mainFlatListTouchable}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Add</Text>
                        <MaterialIcons name="add" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
            }}
            ></FlatList>

            <Text style={styles.mainFoodCategoryText} >Pizza __________________________________</Text>
            <FlatList
            data={pizzaData}
            horizontal={true}
            keyExtractor={(data)=>data.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item: data})=>{
            return(
                <View style={styles.mainFlatListInnerContainer} >
                    <Image source={{uri:data.uri}} style={styles.mainFlatListImage} ></Image>
                    <Text style={styles.mainFlatListText} >Size: {data.name}</Text>
                    <Text style={styles.mainFlatListText} >Price: Rs.{data.price}</Text>
                    <TouchableOpacity
                    onPress={()=>addItems(data)}
                    style={styles.mainFlatListTouchable}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Add</Text>
                        <MaterialIcons name="add" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
            }}
            ></FlatList>

            
        </View>
    )
}

export default function HomeScreen({navigation}) {
    const [changeScreen, setChangeScreen] = useState(false);

    setTimeout(() => {
        setChangeScreen(true)
    }, 1000);
    
  return (
    <View style={{flex:1}}>
    {changeScreen ? <Main navigation={navigation} />:<Splash />}
    </View>
  );
}

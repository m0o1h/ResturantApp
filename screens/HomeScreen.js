import React,{useState, useLayoutEffect} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import SplashScreen from './SplashScreen';
import { styles } from './Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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

    return(
        <View style={styles.container} >
            <View style={styles.homeHeader} >
                <Image source={{uri:'https://ogfood.app/ogfood_hd.png'}} style={styles.homeHeaderImage} ></Image>
                <Text style={styles.homeHeaderText} >OG FOOD</Text>
                <FontAwesome name="user-circle" size={24} color="black" style={styles.homeHeaderUserIcon} />
            </View>

            <View style={styles.homeTopNameContainer} >
                <Text style={styles.homeTopNameText} >FOOD KING</Text>
            </View>

            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTopBigTouchable}
                    >
                    <Text style={styles.homeTopBigTouchableText} >OPEN POS</Text>
            </TouchableOpacity>

            <View style={styles.homeTouchanleListContainer} >
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >New Order</Text>
                        <MaterialIcons name="add" size={24} color="black" />
                    </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Social Media.</Text>
                        <Foundation name="social-blogger" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>navigation.navigate('OrderNoScreen')}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Orders</Text>
                        <Entypo name="list" size={24} color="black" />
                    </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>navigation.navigate('MenuScreen')}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Menu</Text>
                        <MaterialIcons name="restaurant-menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Statistics</Text>
                        <Entypo name="line-graph" size={24} color="black" />
                    </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Reviews</Text>
                        <MaterialIcons name="rate-review" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Schedule</Text>
                        <MaterialIcons name="schedule" size={24} color="black" />
                    </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.homeTouchanleList}
                    >
                        <Text style={{...styles.mainFlatListText, color:'black'}} >Account</Text>
                        <MaterialIcons name="account-balance-wallet" size={24} color="black" />
            </TouchableOpacity>
            </View>
            
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
    {changeScreen ? <Main navigation={navigation} />:<Splash navigation={navigation} />}
    </View>
  );
}

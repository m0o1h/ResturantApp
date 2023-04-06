import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ArrayOfOrderedData, totalPrice } from '../Recoil/GlobalVariables';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function DetailsScreen({navigation}) {
    const [name, setName] = useRecoilState(ArrayOfOrderedData);
    const totalOrderPrice = useRecoilValue(totalPrice);

    const moveBack = () =>{
        navigation.navigate('HomeScreen')
    }

    const removeItem = (item) =>{
      setName(name.filter((data) => data[0].uri !== item[0].uri));
    }
    

  return (
    <View style={{...styles.container, justifyContent:'flex-end'}} >
      <Ionicons name="arrow-back" size={30} color="white" onPress={moveBack} style={styles.detailsMoveBackIcon} />
      <View style={styles.detailsContainer} >
        <Text style={styles.detailsMainHeadingText} >Order Details</Text>
        <Text style={styles.detailsText} >Total Price: - Rs.{totalOrderPrice}</Text>
        {name.length==0?
        <View style={styles.simpleContainer} >
          <Text style={{...styles.detailsMainHeadingText, fontSize:25}} >Please add somthing First.</Text>
        </View>
        :
        <View style={{flex:1}} >
          <Text style={styles.detailsText} >Items you have added</Text>
        <FlatList
        data={name}
        numColumns={2}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <View style={{...styles.mainFlatListInnerContainer, width:'47.5%'}}>
            <Image source={{ uri: item[0].uri }} style={styles.mainFlatListImage} />
            <Text style={{...styles.mainFlatListText, color:'black'}}>Size: {item[0].name}</Text>
            <Text style={{...styles.mainFlatListText, color:'black'}}>Price: Rs.{item[0].price}</Text>
            <TouchableOpacity onPress={() => removeItem(item)} style={styles.mainFlatListTouchable}>
              <Text style={{...styles.mainFlatListText, color:'black'}} >Remove</Text>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        />

        <TouchableOpacity onPress={() =>alert('Your order has been placed. It will be at your door steps shortly.')} style={styles.mainFlatListTouchable}>
            <Text style={{...styles.detailsText}} >Place Order</Text>
        </TouchableOpacity>
        </View>}
        

      </View>
     </View>
  );
}



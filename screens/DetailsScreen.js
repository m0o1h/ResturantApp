import React, { useState, useEffect, } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ArrayOfOrderedData, totalPrice, OrderSlipGenerationAtom, orderCount } from '../Recoil/GlobalVariables';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function DetailsScreen({navigation}) {
    const [name, setName] = useRecoilState(ArrayOfOrderedData);
    const totalOrderPrice = useRecoilValue(totalPrice);
    const [orderSlipGeneration, setOrderSlipGeneration] = useRecoilState(OrderSlipGenerationAtom);
    const [curretDateTime, setCurrentDateTime] = useState(new Date(Date.now()));
    const [orderNo, setOrderNo] = useRecoilState(orderCount);

    const moveBack = () =>{
      navigation.goBack();
    }

    const removeItem = (item) =>{
      setName(name.filter((data) => data[0].time !== item[0].time));
    }

    const placeOrder = () => {
      alert('Order has been placed.');
      setOrderNo(prevOrderNo => prevOrderNo + 1);
      const orderSlipDetails = [];
      name.map((data)=>{
        orderSlipDetails.push({
          individualPrice:data[0].price,
          uri:data[0].uri,
          name:data[0].name,
          price:totalOrderPrice,
          currentStatus:'Placed',
          date:curretDateTime.toDateString(),
          time:curretDateTime.toTimeString().slice(0, -8),
          orderNumber:orderNo,
        });
      })
      setOrderSlipGeneration([orderSlipDetails, ...orderSlipGeneration]);
      setName([]);
      navigation.navigate('OrderNoScreen')
    }
    
    

  return (
    <View style={{...styles.container, justifyContent:'flex-end'}} >
      <Ionicons name="arrow-back" size={30} color="white" onPress={moveBack} style={styles.detailsMoveBackIcon} />
      <View style={styles.detailsContainer} >
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
            <Text style={{...styles.mainFlatListText, color:'black'}}>{item[0].name}</Text>
            <Text style={{...styles.mainFlatListText, color:'black'}}>Price: Rs.{item[0].price}</Text>
            {/* <Text style={{...styles.mainFlatListText, color:'black'}}>Price: Rs.{item[0].time}</Text> */}
            {/* <View style={styles.incrementDecrementItemNoContainer} >
              <TouchableOpacity onPress={() => {}} style={styles.incrementDecrementItemNo}>
                <Entypo name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text style={{...styles.mainFlatListText, color:'black'}} >{item[0].itemQuantity}</Text>
              <TouchableOpacity onPress={() => {}} style={styles.incrementDecrementItemNo}>
                <MaterialIcons name="add" size={24} color="black" />
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity onPress={() => removeItem(item)} style={styles.mainFlatListTouchable}>
              <Text style={{...styles.mainFlatListText, color:'black'}} >Remove</Text>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        />

          <Text style={styles.detailsMainHeadingText} >Order Details</Text>
          <Text style={styles.detailsText} >Total Price: - Rs.{totalOrderPrice}</Text>


        <TouchableOpacity onPress={placeOrder} style={styles.mainFlatListTouchable}>
            <Text style={{...styles.detailsText}} >Place Order</Text>
        </TouchableOpacity>
        </View>}
        

      </View>
     </View>
  );
}



import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { styles } from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {OrderSlipGenerationAtom } from '../Recoil/GlobalVariables';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function OrderNoScreen({navigation}) {
  const [orderSlipGeneration, setOrderSlipGeneration] = useRecoilState(OrderSlipGenerationAtom);
  const [detailModal, setDetailModal] = useState(false);

    const moveBack = () =>{
        navigation.goBack();
    };

    const changeModalState = () =>{
      setDetailModal(!detailModal);
    };
    

  return (
    <View style={{...styles.container, justifyContent:'flex-end'}} >
      <Ionicons name="arrow-back" size={30} color="white" onPress={moveBack} style={styles.detailsMoveBackIcon} />
      <View style={styles.detailsContainer} >
        <Text style={styles.detailsMainHeadingText} >Orders Slips</Text>
        <FlatList
        data={orderSlipGeneration}
        renderItem={({item:data})=>{
          return(
            <TouchableOpacity onPress={()=>alert('Ordered Items will be shown.')} style={styles.orderScreenFlatlistContainer} >
              <Text style={styles.detailsText} >Order No: <Text style={{color:'red'}} >{data[0].orderNumber}</Text></Text>
              <Text style={styles.detailsText} >Current Status: <Text style={{color:'green'}} >{data[0].currentStatus}</Text></Text>
              <Text style={styles.detailsText} >Total Price: <Text style={{color:'#5060FF'}} >{data[0].price}</Text></Text>
              <Text style={styles.detailsText} >Order Time: <Text style={{color:'#5060FF'}} >{data[0].time}</Text></Text>
              <Text style={styles.detailsText} >Order Date: <Text style={{color:'#5060FF'}} >{data[0].date}</Text></Text>
              {/* <Modal
              visible={detailModal}
              animationType='fade'
              transparent={false}
              >
                {console.log(data[0].date)}
                <View style={{...styles.mainFlatListInnerContainer, width:'47.5%'}}>
                  <Image source={{ uri: data[0].uri }} style={styles.mainFlatListImage} />
                  <Text style={{...styles.mainFlatListText, color:'black'}}>{data[0].name}</Text>
                  <Text style={{...styles.mainFlatListText, color:'black'}}>Price: Rs.{data[0].individualPrice}</Text>
                </View>
                <Button title='Disable' onPress={changeModalState}  ></Button>
              </Modal> */}
            </TouchableOpacity>
          )
        }}
        ></FlatList>
      </View>
     </View>
  );
}



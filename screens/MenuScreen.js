import React,{useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ArrayOfOrderedData, TotallDataArray, SearchInput, FilterSearchItemsSelector} from '../Recoil/GlobalVariables';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function HomeScreen({navigation}) {
    const [name, setName] = useRecoilState(ArrayOfOrderedData);
    const [totalAgregateData, setTotalAgregateData] = useRecoilState(TotallDataArray);
    const [dataHeadingSearch, setDataHeadingSearch] = useRecoilState(FilterSearchItemsSelector);
    const [searchInput, setSearchInput] = useRecoilState(SearchInput);
    const [curretDateTime, setCurrentDateTime] = useState(new Date(Date.now()));

    const detailsScreen = () =>{
        navigation.navigate('DetailsScreen')
    }

    const moveBack = () =>{
        navigation.goBack();
    }
    

    // const addItems = (item) => {
    //     const itemIndex = name.findIndex((data) => data[0].uri === item.uri);
    //     if (itemIndex !== -1) {
    //       name[itemIndex][0].itemQuantity += 1;
    //       setName([...name]); // update the state with the modified array
    //     } else {
    //       const orderDetails = [];
    //       const itemName = item.name;
    //       const itemPrice = item.price;
    //       const itemUri = item.uri;
    //       orderDetails.push({
    //         name: itemName,
    //         price: itemPrice,
    //         uri: itemUri,
    //         itemQuantity: 1,
    //       });
    //       setName([...name, orderDetails]);
    //     }
    //   };

    const addItems = (item) => {
          const orderDetails = [];
          const itemName = item.name;
          const itemPrice = item.price;
          const itemUri = item.uri;
          orderDetails.push({
            name: itemName,
            price: itemPrice,
            uri: itemUri,
            //itemQuantity: 1,
            time: curretDateTime.toTimeString(),
          });
          setName([...name, orderDetails]);
          setCurrentDateTime(new Date(Date.now()))
      };
      
      

    return(
        <View style={styles.container} >
            <View style={styles.mainTopImageContainer} >
                <Image source={{uri:"https://cdn.siasat.com/wp-content/uploads/2022/02/Untitled-design-58-1.png"}} style={styles.mainTopImage} ></Image>
                <Text style={styles.mainTopImageText} >Different Kind of Food</Text>
                <TouchableOpacity
                style={styles.mainTopCartIcon}
                onPress={detailsScreen}
                >
                <FontAwesome name="shopping-bag" size={30} color="white" />
                </TouchableOpacity>
                <Ionicons name="arrow-back" size={30} color="white" onPress={moveBack} style={styles.mainTopBackIcon} />
            </View>


            <TextInput
            style={styles.menuItemSearchBar}
            onChangeText={val=>setSearchInput(val)}
            placeholder='Search By Catogery. i.e Indian'
            ></TextInput>

            <View 
            style={styles.container} 
            showsVerticalScrollIndicator={false} 
            >
            
            <FlatList
            data={dataHeadingSearch}
            renderItem={({item:dataHeading})=>(
        
            <FlatList
            data={totalAgregateData}
            renderItem={({item:data})=>{
                {if(dataHeading == data[0].findBy ){
                    return(
                        <View style={{...styles.mainFlatListInnerContainer, width:'100%', height:250}}>
                            <Text style={styles.mainFoodCategoryText} >{data[0].findBy} ____________________________</Text>
                            <FlatList
                            data={data[1]}
                            horizontal={true}
                            keyExtractor={(data)=>data.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item: data})=>{
                            return(
                                <View style={styles.mainFlatListInnerContainer} >
                                    <Image source={{uri:data.uri}} style={styles.mainFlatListImage} ></Image>
                                    <Text style={styles.mainFlatListText} >{data.name}</Text>
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

                }}
            }}
            ></FlatList>

            )}
            ></FlatList>

        </View>
        </View>
    );
}

import { View, Text,SafeAreaView,StatusBar, FlatList, StyleSheet, Dimensions,Image, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'
import {COLORS} from '../../Component/Colors/Colors'
import {db} from '../../Data/Data'
import Ionicons from '@expo/vector-icons/Ionicons';
const SCREEN_WIDTH=Dimensions.get('window').width

const CartScreen = () => {
  function renderItem({item}) {

    return (
        <View style={{...styles.cartLine}}>
           <View>
                <Text style={styles.lineLeft}>{item.name} </Text>
            </View>
            <View style={{...styles.cartItem,width:SCREEN_WIDTH*0.3}}>
                <Image style={{...styles.cartImage}} source={item.image}/> 
            </View>
            <View style={{justifyContent:'center',
                          alignItems: 'center'}}>
                <Text style={styles.lineRight}>
                  Price:  {'\u20AC'} {item.price}
                </Text>
             </View>
    
                 <View style={{flexDirection:'row',
                              justifyContent: 'center',
                              alignItems: 'center'}}>           
                 </View>
             <View style={{justifyContent: 'center',
                          alignItems: 'center'}}>
             <Ionicons    
                    type='font-awesome'
                    name='remove-circle'
                    color={COLORS.color5}
                    size={26}
                    onPress={{}}
                    />
             </View>
             <View style={{justifyContent: 'center',
                          alignItems: 'center'}}>
                  <Text style={{fontWeight:'bold'}}>1</Text>
             </View>
             <View style={{justifyContent: 'center',
                            alignItems: 'center'}}>
                  <Ionicons 
                          type='font-awesome'
                          name='add-circle'
                          color= {COLORS.color1}
                          size={26}
                          onPress={{}}
                  />
             </View>
    
        </View>
     );
    }
    
      return (
        <SafeAreaView style={{flex: 1,
                              marginTop: StatusBar.currentHeight || 0,
                              backgroundColor:COLORS.color3}}>
          <Header  cartColor={COLORS.color2}/>
          <FlatList
           style={styles.itemsList}
           contentContainerStyle={styles.itemsListContainer}
           data={db}
           renderItem={renderItem}
           keyExtractor={(item) => item.id.toString()}
         />
         <View style={{}}>
           <Text style={{fontWeight: 'bold',
                          color:COLORS.color5,
                          fontSize:28}}> 
            Number of Items: 8
            </Text>
           <Text style={{fontWeight: 'bold',
                       color:COLORS.color5,
                       fontSize:28}}> 
                       Total: {'\u20AC'} 155
           </Text>
         </View>
         <View style={{flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center'}}>
         <Pressable onPress={{}}
          style={({ pressed }) => [
            { marginTop:18,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 6,
                elevation: 3,
                marginBottom: 8,
                width:SCREEN_WIDTH*0.5,
              backgroundColor: pressed
                ? COLORS.color4
                : COLORS.color1},
              ]}>
              {({ pressed }) => (
                                <Text style={{fontWeight: 'bold',
                                            color:COLORS.color3}}>
                                {pressed ? 'Loading...' : 'Check out'}
                                </Text>
               )}
        </Pressable>
        <View style={{justifyContent:'center',alignItems: 'center'}}>
            <Ionicons 
              type='font-awesome'
              name='trash'
              color= {COLORS.color1}
              size={26}
              onPress={{}}
              />
            <Text style={{fontWeight: 'bold',
                        color:COLORS.color4}}>
                          delete All
            </Text>
           </View>
        </View>
        </SafeAreaView>
      )
    }


export default CartScreen


const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    borderWidth:2, 
    marginBottom: 8,
    borderRadius:6,
    borderColor:COLORS.color4
    
    
  },
  cartImage: {
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    height: '100%',
    width: '100%',
   
    justifyContent: 'center',
    alignItems: 'center',
    },
  cartItem: {  height:80,
    flexDirection: 'row',
    marginHorizontal:9,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth:1,
    borderColor: 'gray', 
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginTop:10,
    marginBottom:8
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 18, 
    lineHeight: 20,
    fontWeight: 'bold', 
    color:'#333333',
    textAlign:'center'
  },
  lineRight: { 
   
    fontSize: 18, 
    fontWeight: 'bold',
    
    
  },
  itemsList: {
    
  },
  itemsListContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
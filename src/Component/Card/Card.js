import { View, Text, TouchableOpacity,Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Card = ({onPress, 
                    honeyName,
                    deliveryAvailable,
                    discountAvailable,
                    discountPercent,
                    numberOfReview,
                    averageReview,
                    price,
                    images,
                    screenWith,
                    shortDescription,
                    screenHeight
}) => {
  return (
    
    <TouchableOpacity onPress={onPress}>
        <View style={{...styles.cardView, width:screenWith, height:screenHeight}}>
            <Image style={{...styles.image, width:screenWith}}
            source={images}
            />
            <View>
            <View>
                <Text style={{...styles.honeyName}}> {honeyName}</Text>
            </View>
            <View style={{flexDirection: 'row',flexWrap: "wrap"}}>
                <View style={{flexDirection: 'row',
                            flexWrap: "wrap",
                            justifyContent:'center',
                            alignItems:'center'}}>
                <Ionicons
                type='font-awesome'
                name='logo-euro'
                color='green'
                size={18}
                />
                <View>
                <Text style={styles.priceHoney}>{price}</Text>
                </View>
                </View>
                <View >
                    <Text style={styles.description}>{shortDescription}</Text>
                </View>
            </View>
        </View>
        </View>
        
        <View style={{...styles.review}}>
            <Text style={styles.average}>{averageReview}</Text>
            <Text  style={{color:'white'}}>{numberOfReview} reviews</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
cardView: {
    marginHorizontal:6,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth:2,
    borderColor: 'white', 
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
},
image:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    height:150,
},

honeyName:{
    fontSize:17,
    fontWeight: 'bold',
    color:'gray',
    marginTop:5,
    
},
priceHoney:{

    flex:4,
    color:'green',
    flexDirection: 'row',
    borderRightColor:'green',
    paddingHorizontal:5,
    borderRightWidth:1,
    fontWeight: 'bold',
    fontSize:20,
},
description:{
    fontSize:12,
    padding:5,
    color:'gray',
    paddingHorizontal:10,
},
review:{
    position:"absolute",
    top:0,
    right:10,
    backgroundColor:'rgba(52,52,52,0.3)',
    padding:2,
    alignItems: 'center', 
    justifyContent:'center',
    borderTopRightRadius:5,
    borderBottomLeftRadius:12,

},
average:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:-3
}

})
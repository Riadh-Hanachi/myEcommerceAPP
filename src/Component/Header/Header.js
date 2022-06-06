import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {COLORS} from '../Colors/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({profileColor=COLORS.color3,
      addColor=COLORS.color3,
       homeColor=COLORS.color3,
        favoriteColor=COLORS.color3,
        cartColor=COLORS.color3,
        calculatorColor=COLORS.color3}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.elements}>
        <Ionicons
             type='font-awesome'
             name='person'
             color={profileColor}
             size={32}
             onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
             />
        </View>
        <View style={styles.elements}>
        <Ionicons
             type='font-awesome'
             name='home'
             color={homeColor}
             size={32}
             onPress={() => {
              navigation.navigate('Home');
            }}
             />
        </View>
        <View style={styles.elements}>
        <Ionicons
             type='font-awesome'
             name='add-circle'
             color={addColor}
             size={32}
             onPress={() => {
              navigation.navigate('AddProductScreen');
            }}
             />
             
             
        </View>
        <View style={styles.elements}>
        <Ionicons
             type='font-awesome'
             name='calculator'
             color={calculatorColor}
             size={32}
             onPress={() => {
              navigation.navigate('CalculatorScreen');
            }}
             />
        </View>
        
        <View style={styles.elements}>
        <Ionicons 
             type='font-awesome'
             name='heart'
             color={favoriteColor}
             size={32}
             onPress={() => {
              navigation.navigate('FavoriteScreen');
            }}
             />
        </View>
        <View style={styles.elements}>
        <Ionicons  
             type='font-awesome'
             name='cart'
             color={cartColor}
             size={32}
             onPress={() => {
              navigation.navigate('CartScreen');
            }}
             />
        </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
         justifyContent:'space-evenly',
         backgroundColor:COLORS.color4
    },
    elements:{
        borderColor:COLORS.color1,
        borderWidth:2,
        borderRadius:6,
        width:42,
        height:42,
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        marginBottom:8,

    }
})
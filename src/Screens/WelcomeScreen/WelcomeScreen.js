import { View, Text, SafeAreaView, StyleSheet, StatusBar,Image,Pressable } from 'react-native'
import React from 'react'
import {COLORS} from '../../Component/Colors/Colors'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/logo28.png')}
      />
      </View>
      
        <View >
      <Text style={styles.text}>WELCOME TO OUR MOBILE APPLICAION</Text>
      </View>
      <View>
      <View style={{alignItems:'center'}}>
      <Pressable
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? COLORS.color4
              : COLORS.color1
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text1}>
            {pressed ? 'Loading...' : 'SIGN IN'}
          </Text>
        )}
      </Pressable>
      </View>

      <View style={{alignItems:'center'}}>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? COLORS.color4
              : COLORS.color1
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text1}>
            {pressed ? 'Loading...' : 'SIGN UP'}
          </Text>
        )}
      </Pressable>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:COLORS.color3,
    marginTop: StatusBar.currentHeight || 0,justifyContent:'space-evenly',
    
  },
  logo: {
    width: 180,
    height: 88,
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    marginTop:8,
    alignItems:'center',
    justifyContent:'center',
    width: '50%',
    
  },
  text1:{
    alignItems:'center',
    color:COLORS.color3
  },
})
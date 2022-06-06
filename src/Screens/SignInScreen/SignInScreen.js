import { View, Text, SafeAreaView, TextInput, StyleSheet,StatusBar,Pressable,Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {COLORS} from '../../Component/Colors/Colors'

const SignInScreen = () => {

    const navigation = useNavigation();
    const [text, onChangeText] = useState();
    const [password, onChangePassword] = useState();
  
  return (
     <SafeAreaView style={styles.container}>
       <View style={{alignItems:'center',
                    flex:2,
                    justifyContent:'center'
                    }}>
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/logo28.png')}
      />
      </View>
      <View style={{flex:8,
                    justifyContent:'center'
                    }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="PASSWORD"
        
      />
    <View style={{alignItems:'center'}}>
      <Pressable
            onPress={() => {
              navigation.navigate('Home');
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
      <View style={{alignItems:'center', 
                        marginTop:8}}>
          <Text style={styles.text2} 
                onPress={()=>navigation.navigate('SignUpScreen')}>
              You don't have an account
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:6,
    borderColor:COLORS.color1
  },
  container:{
    flex:1,
    backgroundColor:COLORS.color3,
    marginTop: StatusBar.currentHeight || 0,justifyContent:'flex-start',
    
  },
  text1:{
    alignItems:'center',
    color:COLORS.color3
    
  },
  text2:{
    alignItems:'center',
    color:COLORS.color5
    
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    marginTop:8,
    alignItems:'center',
    justifyContent:'center',
    width: '50%',
    
  },
  logo: {
    width: 180,
    height: 88,
  },
});
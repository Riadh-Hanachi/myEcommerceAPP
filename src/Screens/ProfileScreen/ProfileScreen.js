import { View, Text,SafeAreaView,StatusBar, Button,Pressable, Image } from 'react-native'
import React, {useState}from 'react'
import {COLORS} from '../../Component/Colors/Colors'
import Header from '../../Component/Header'
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
                    // No permissions request is necessary for launching the image library
                    let result = await ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.All,
                      allowsEditing: true,
                      aspect: [4, 3],
                      quality: 1,
                    });

                    console.log(result);

                    if (!result.cancelled) {
                      setImage(result.uri);
                    }
  }




  return (
    <SafeAreaView style={{flex: 1,marginTop: StatusBar.currentHeight || 0,
                  backgroundColor:COLORS.color3}}>
      <Header  profileColor={COLORS.color2}/>

      <View style={{backgroundColor:COLORS.color4,
                    justifyContent:'center', 
                    alignItems: 'center',
                    marginHorizontal:30, 
                    borderRadius:30,
                    marginTop:10}}>
        <Text style={{fontWeight: 'bold',
                      fontSize:24,
                      color:COLORS.color1}}>
                        Profile Information:
          </Text>
        
      </View>
      <View style={{flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'}}>
        <Image source={{ uri: image }} 
                style={{ width: 100,
                          height: 100,
                          marginTop:10, 
                          borderRadius:60, 
                          borderWidth:2, 
                          borderColor:COLORS.color2 }} />
        <View style={{  alignItems: 'center', 
                        justifyContent: 'center',
                        marginTop:10 }}>
          <Pressable style={{backgroundColor:COLORS.color4,
                            borderWidth:2, 
                            borderRadius:6, 
                            borderColor:COLORS.color2}}  
                            onPress={pickImage} >
              <Text style={{fontWeight: 'bold',
                            color:COLORS.color5}}>
                      Pick picture
              </Text>
            </Pressable>
        
      </View>
        </View>
          <View style={{marginTop:10,
                        justifyContent: 'center',
                        marginHorizontal:40}}>
            <Text style={{fontWeight: 'bold',
                          fontSize:20}}> 
                  NAME: 
              </Text>
            <Text style={{fontSize:18}}> 
                  Riadh
            </Text>
            <Text style={{fontWeight: 'bold',
                          fontSize:18,
                          marginTop:10 }}> 
                  EMAIL: 
             </Text>
            <Text style={{fontSize:18}}> 
                  riadh.hanachi@fst.utm.tn
            </Text>
            <Text style={{fontWeight: 'bold',
                          fontSize:18, 
                          marginTop:10 }}> 
                  PHONE NUMBER: 
            </Text>
            <Text style={{fontSize:18}}>
              +21622651820
            </Text>
            <Text style={{fontWeight: 'bold',
                          fontSize:18, 
                          marginTop:10 }}> 
                  CREATION TIME: 
            </Text>
            <Text style={{fontSize:18}}>
                  11/01/2022
            </Text>
            <Text style={{fontWeight: 'bold',
                          fontSize:18,
                           marginTop:10 }}> 
                  LAST SIGN IN TIME: 
            </Text>
            <Text style={{fontSize:18}}>
                  01/06/2022
            </Text>
        </View>
      
      

       

    </SafeAreaView>
  )
}

export default ProfileScreen
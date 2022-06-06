import { View, Text,SafeAreaView,StatusBar, Button,Pressable, Image,TextInput, StyleSheet, Dimensions } from 'react-native'
import React, {useState}from 'react'
import {COLORS} from '../../Component/Colors/Colors'
import Header from '../../Component/Header'
import * as ImagePicker from 'expo-image-picker';
const SCREEN_WIDTH=Dimensions.get('window').width

const AddProductScreen = () => {


  const [productName, onChangeProductName] = useState();
  const [category, onChangeCategory] = useState();
  const [price, onChangePrice] = useState();
  const [description, onChangeDescription] = useState();
  
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
    <SafeAreaView style={{flex: 1,marginTop: StatusBar.currentHeight || 0,backgroundColor:COLORS.color3}}>
      <Header  addColor={COLORS.color2}/>

      <View style={{backgroundColor:COLORS.color4,justifyContent:'center', alignItems: 'center',marginHorizontal:30, borderRadius:30,marginTop:10}}>
        <Text style={{fontWeight: 'bold',fontSize:24,color:COLORS.color1}}>Add a new product:</Text>
        
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>
        <Image source={{ uri: image }} style={{ width: 100, height: 100,marginTop:10, borderRadius:30, borderWidth:2, borderColor:COLORS.color2 }} />
        <View style={{  alignItems: 'center', justifyContent: 'center',marginTop:10 }}>
          <Pressable style={{backgroundColor:COLORS.color4,borderWidth:2, borderRadius:6, borderColor:COLORS.color2}}  onPress={pickImage} >
            <Text style={{fontWeight: 'bold',color:COLORS.color3}}> Pick picture </Text>
            </Pressable>
        
      </View>
        </View>
        <View>
           <TextInput
        style={styles.input}
        onChangeText={onChangeProductName}
        value={productName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCategory}
        value={category}
        placeholder="Category"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePrice}
        value={price}
        placeholder="Price"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Description"
      
      />
        
      </View>
      <View style={{justifyContent: 'center',alignItems: 'center'}}>
      <Pressable style={{backgroundColor:COLORS.color4,
                        borderWidth:2,
                          borderRadius:6,
                          borderColor:COLORS.color2}}  
                        >
            <Text style={{fontWeight: 'bold',textAlign:'center',color:COLORS.color3}}> Save product </Text>
        </Pressable>
        </View>

    </SafeAreaView>
  )
}

export default AddProductScreen


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
    backgroundColor:"white",
    marginTop: StatusBar.currentHeight || 0,justifyContent:'center',
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
    width: '50%'
  },
  logo: {
    width: 180,
    height: 88,
  },
});
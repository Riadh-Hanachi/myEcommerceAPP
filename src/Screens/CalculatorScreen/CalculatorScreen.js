import { View, Text,SafeAreaView,StatusBar , StyleSheet, Dimensions,TextInput,Pressable} from 'react-native'
import React, {useState}from 'react'
import {COLORS} from '../../Component/Colors/Colors'
import Header from '../../Component/Header'
const SCREEN_WIDTH=Dimensions.get('window').width

const CalculatorScreen = () => {
    const [number, onChangeNumber] = useState('');
    const [result, setResult] = useState('0');
    
    const onPressTitle = () => {
        onChangeNumber(number+"7");
      };
  return (
    <SafeAreaView style={{flex: 1,marginTop: StatusBar.currentHeight || 0,backgroundColor:COLORS.color3}}>
      <Header  calculatorColor={COLORS.color2}/>
      <View style={{justifyContent:'space-around', flex:1}}>
        <View style={{borderWidth:2,height:80, justifyContent:'center',borderRadius:6, marginHorizontal:8 }}>
        <Text style={{fontWeight: 'bold', fontSize:18,color:COLORS.color5}}> {number}</Text>
      </View>
      <View style={{borderWidth:2,height:40,justifyContent:'center',borderRadius:6, marginHorizontal:8}}>
       <Text style={{fontWeight: 'bold', fontSize:18,color:COLORS.color2, textAlign:'center'}}>{result}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <Pressable style={{...styles.button, backgroundColor:COLORS.color1}} onPress={ () => {
        onChangeNumber('');
      }}><Text style={styles.text}>C</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number.slice(0,-1))}}><Text style={styles.text}>del</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"%")}}><Text style={styles.text}>%</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"/")}}><Text style={styles.text}>/</Text></Pressable>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',}}>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"7");
      }} >
            <Text style={styles.text}>7</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"8");}}><Text style={styles.text} >8</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"9")}}><Text style={styles.text} >9</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"*")}}><Text style={styles.text}>*</Text></Pressable>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"4")}}><Text style={styles.text}>4</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"5")}}><Text style={styles.text}>5</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"6")}}><Text style={styles.text}>6</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"+")}}><Text style={styles.text}>+</Text></Pressable>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"1")}}><Text style={styles.text}>1</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"2")}}><Text style={styles.text}>2</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"3")}}><Text style={styles.text}>3</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"-")}}><Text style={styles.text}>-</Text></Pressable>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"0")}}><Text style={styles.text}>0</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+".")}}><Text style={styles.text}>.</Text></Pressable>
        <Pressable style={styles.button} onPress={ () => {
        onChangeNumber(number+"00")}}><Text style={styles.text}>00</Text></Pressable>
        <Pressable style={{...styles.button,backgroundColor:COLORS.color1}} onPress={ () => {
         try {setResult(eval(number))} catch {}}}><Text style={{...styles.text}}>=</Text></Pressable>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({

    button:{
        borderWidth:2,
         borderRadius:6,
         width:SCREEN_WIDTH/5,
         height:SCREEN_WIDTH/5,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:COLORS.color4
    },
    text:{
        fontSize: 28,
        fontWeight: 'bold',
        color:COLORS.color3
    }
})
import { View, Text,SafeAreaView,StatusBar,Dimensions,ScrollView,Image, StyleSheet, Pressable, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import {COLORS} from '../../Component/Colors/Colors'
import Header from '../../Component/Header'
import {db,getProduct} from '../../Data/Data'
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../../Component/Card'


const ProductDetails = ({route, navigation}) => {
    const [product, setProduct] = useState({});
    const SCREEN_WIDTH=Dimensions.get('window').width
    const [heartPressed,setHeartPressed]=useState()
    useEffect(() => {
        setProduct(getProduct(route.params.productId));
      });
  return (
    <SafeAreaView style={{flex: 1,
                  marginTop: StatusBar.currentHeight || 0,
                  backgroundColor:COLORS.color3}}>
      <Header/>
      
      <ScrollView>
     
        <Image
          style={styles.image}
          source={product.image}
        />
         <View style={{
            position: 'absolute',
            top:30,
            right:10,
            padding:2,
            alignItems: 'center', 
            justifyContent:'center',
            borderTopRightRadius:5,
            borderBottomLeftRadius:12,}}>
            
            <Ionicons
                raised
                name='heart'
                type='font-awesome'
                size={32}
                color={heartPressed ?'red':'gray'}
                onPress={ () => {console.log(getFavoriteValue(product.id));
                    onAddItemToFavorite()}}
                />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={{flexDirection:'row',  justifyContent:'flex-start'}}>
              <Ionicons
                type='font-awesome'
                name='logo-euro'
                color='green'
                size={18}
                />
                <Text style={styles.price}> {product.price}</Text>
          </View>
          
          <Text style={styles.description}>{product.description}</Text>
          <Pressable onPress={{}}
                  style={({ pressed }) => [
                    { marginTop:18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 6,
                        elevation: 3,
                      backgroundColor: pressed
                        ? COLORS.color4
                        : COLORS.color1},
                      ]}>
                    {({ pressed }) => (
                              <Text style={styles.text1}>
                                {pressed ? 'Loading...' : 'Add to Card'}
                              </Text>
                            )}
        </Pressable>
                </View>

        <View style={{backgroundColor:COLORS.color3,
                      marginTop:10,alignItems: 'center'}}>
      <Text style={{color: COLORS.color4,
                  fontSize:24,
                  letterSpacing:3,
                    fontWeight: 'bold',
                    paddingLeft:10}}>
          MORE PRODUCTS
      </Text>
      </View>

     

      <View>
        <FlatList style={{marginTop:10,marginBottom:10}}
                  horizontal={true}
                  data={db}
                  keyExtractor={(item,index)=>index.toString()}
                  renderItem={
                    ({item})=>(
                      <View>
                      <Card
                      screenWith={SCREEN_WIDTH*0.5}
                      images={item.image}
                      price={item.price}
                      honeyName={item.name}
                      shortDescription={item.description}
                      numberOfReview={item.numberOfReviews}
                      averageReview={item.averageOfReviews}
                      onPress={() => {
                        navigation.navigate('ProductDetailsScreen', {
                          productId: item.id,
                        });
                      }}
                      />
                      </View>
                    )
                  }

        />
      </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 16,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 1,
      marginVertical: 20,
    },
    image: {
      height: 300,
      width: '100%',
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
    },
    infoContainer: {
      padding: 16,
      
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
      fontWeight: 'bold',
      color:'green'
  
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: '#787878',
      marginBottom: 16,
    },
    text1:{
        alignItems:'center',
        color:COLORS.color3,
        fontWeight: 'bold',
        fontSize:18,
        
      }
  });
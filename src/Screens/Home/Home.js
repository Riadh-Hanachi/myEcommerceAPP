import { View, Text,StatusBar,SafeAreaView, Dimensions, FlatList,ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../../Component/Header'
import {COLORS} from '../../Component/Colors/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {db} from '../../Data/Data'
import Card from '../../Component/Card'

const Home = ({ navigation}) => {
  const [indexCheck, setIndexCheck]=useState("1")
  const SCREEN_WIDTH=Dimensions.get('window').width
  return (
    <SafeAreaView style={{flex: 1,marginTop: StatusBar.currentHeight || 0,
                          backgroundColor:COLORS.color3}}>
     <Header homeColor={COLORS.color2}/>
     <ScrollView>
     <View style={{with:SCREEN_WIDTH,
                   paddingTop:10, 
                   flexDirection:'row',
                  flexWrap:'wrap'}}>
        { 
        db.map(item=>(
          <View key={item.id} style={{paddingBottom:20}}>
            <Card
                      screenWith={SCREEN_WIDTH*0.46}
                      screenHeight={SCREEN_WIDTH*0.46*1.5}
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

        )
        }

      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home
import React , {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image, TouchableOpacity } from 'react-native';
import {AppLoading} from  'expo';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
    'OpenSans-Bold' :  require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'Pacifico-Regular' : require('./assets/fonts/Pacifico-Regular.ttf')

});

export default function App() {
const [fontsLoaded , setFontsLoaded] = useState(false);



 if(fontsLoaded){
  return (
    <ImageBackground 
                  source ={require('./src/images/dc76.jpg')} 
                  style= {{height : "100%" , width :"100%",flex : 1 }}>
      <View style={styles.container}>
                <Image source = {require('./src/images/doctor79.png')}
                       style= {styles.imageStyle}>
                </Image>
                <Text style = {styles.textStyle1}> GBR </Text> 
                <Text style = {styles.textStyle2}> Medical Consultant </Text> 
            <TouchableOpacity > 
                <View>
                      <Text style ={styles.textStyle3}> GO </Text>
                </View> 
            </TouchableOpacity>
          
      </View>
  </ImageBackground> 
  
  );

} else {
  return (
  <AppLoading
    startAsync = {getFonts}
    onFinish = {() => setFontsLoaded(true)}
    />
  )
  
}

 } 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle : {
    alignItems : "flex-start",
    height : "40%",
    width: "50%",
    justifyContent : "flex-start",
    marginTop : 20
    
  },
  textStyle1: {
    fontSize : 50,
    marginBottom :10,
    fontFamily : 'Pacifico-Regular'
  },
  textStyle2 : {
    textShadowColor : "black",
    fontWeight : "bold",
    fontSize : 20,
    marginBottom : 150
  },
  textStyle3 : { 
    fontSize : 30,
    fontFamily : 'Pacifico-Regular'
  }

});

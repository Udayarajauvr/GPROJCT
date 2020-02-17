import React , {useState} from 'react';
import {View , Text , StyleSheet , Button,TouchableOpacity, TouchableHighlight, ImageBackground,SafeAreaView} from 'react-native';
import Header1anna from './Header1anna';
import {AppLoading} from  'expo';
import * as Font from 'expo-font';
import CardSection from "./CardSectionanna";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Mat from 'react-native-vector-icons/MaterialIcons';
import Fontist from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';

const getFonts = () => Font.loadAsync({
    'OpenSans-Bold' :  require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular' : require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Pacifico-Regular' : require('../../assets/fonts/Pacifico-Regular.ttf'),
    'Volkhov-BoldItalic' : require('../../assets/fonts/Volkhov-BoldItalic.ttf')


})
const MenuScreen = () => {
    const [fontsLoaded , setFontsLoaded] = useState(false);

    if(fontsLoaded){
        return(
        <SafeAreaView>
            
     <ImageBackground source = {require('../images/annabg.jpg')} style = {{height : "100%" , width : "100%"}}>
        <Header1anna/>
                <View style = {styles.container}>
                
                    
                    <View style = {{flexDirection : "row"}}>    
                                <TouchableOpacity> 
                                    <CardSection >
                                                <View style = {styles.button}>
                                                    <Text style = {styles.buttonText}>
                                                        <Icon name="school" size={40} color="orange" />
                                                        {`\n`}{`\n`}
                                                         +2 RESULT
                                                        </Text>
                                                </View>
                                     </CardSection>
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                                <View style = {styles.button}>
                                                    <Text  style = {styles.buttonText}> 
                                                    <Icons name="gears" size={40} color="green" />
                                                    {`\n`}{`\n`}
                                                         AUTNEA </Text>
                                                </View>
                                        </CardSection>
                                </TouchableOpacity>
                    </View>

                    <View style = {{flexDirection : "row" }}>   
                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Icons name="stethoscope" size={40} color="#03a9f4" />
                                                    {`\n`}{`\n`}
                                                         NEET </Text>
                                            </View>
                                        </CardSection>  
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Icon name="draw-polygon" size={40} color="#e91e63" />
                                                    {`\n`}{`\n`}
                                                         NATA</Text>
                                            </View>
                                        </CardSection>
                                </TouchableOpacity>
                    </View>       
                    <View style = {{flexDirection : "row" }}>   
                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Fontist name="calculator" size={40} color="#673ab7" />
                                                    {`\n`}{`\n`}
                                                         B.COM</Text>
                                            </View>
                                        </CardSection>  
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Mat name="computer" size={40} color="#9c27b0" />
                                                    {`\n`}
                                                         MOCK COUNCILING</Text>
                                            </View>
                                        </CardSection>
                                </TouchableOpacity>
                    </View>      
                    <View style = {{flexDirection : "row" }}>   
                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                   <Fontist name="book" size={40} color="#9c27b0" />
                                                    {`\n`}{`\n`}
                                                         OTHER OPTIONS</Text>
                                            </View>
                                        </CardSection>  
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Mat name="school" size={40} color="#9c27b0" />
                                                    {`\n`}{`\n`}
                                                         SCHOLARSHIP</Text>
                                            </View>
                                        </CardSection>
                                </TouchableOpacity>
                    </View>      
                     
            </View>

</ImageBackground>
</SafeAreaView>
    );
}
 else {
    return (
    <AppLoading
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
      />
    )
    
  }
  
   } 
            
export default  MenuScreen;
const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      alignItems: 'center',
      marginBottom : 10,
      marginTop : 20
    
    },
    button: {
      marginBottom: 0,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius : 50

    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'black',
      fontSize : 14,
      fontFamily : "OpenSans-Bold"
    }
  });
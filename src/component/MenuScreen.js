import React , {useState} from 'react';
import {View , Text , StyleSheet , Button,TouchableOpacity, TouchableHighlight, ImageBackground,SafeAreaView} from 'react-native';
import Header from './Header';
import {AppLoading} from  'expo';
import * as Font from 'expo-font';
import CardSection from "./CardSection";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ent from 'react-native-vector-icons/Entypo';
import Fontist from 'react-native-vector-icons/MaterialCommunityIcons';
import Cal from 'react-native-vector-icons/Feather';


const getFonts = () => Font.loadAsync({
    'OpenSans-Bold' :  require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular' : require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Pacifico-Regular' : require('../../assets/fonts/Pacifico-Regular.ttf')

})
const MenuScreen = () => {
    const [fontsLoaded , setFontsLoaded] = useState(false);

    if(fontsLoaded){
        return(
        <SafeAreaView>
            
     <ImageBackground source = {require('../images/dc76.jpg')} style = {{height : "100%" , width : "100%"}}>
        <Header/>
       
        
                <View style = {styles.container}>
                
                    
                    <View style = {{flexDirection : "row" , marginBottom : 60 , paddingTop : 20}}>    
                                <TouchableOpacity> 
                                    <CardSection >
                                                <View style = {styles.button}>
                                                    <Text style = {styles.buttonText}>
                                                        <Icon name="weight" size={60} color="white" />
                                                        {`\n`}{`\n`}
                                                         BMI{`\n`}TRACKER
                                                        </Text>
                                                </View>
                                     </CardSection>
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                                <View style = {styles.button}>
                                                    <Text  style = {styles.buttonText}> 
                                                    <Ent name="pie-chart" size={60} color="white" />
                                                    {`\n`}{`\n`}
                                                         PERIOD{`\n`}TRACKER </Text>
                                                </View>
                                        </CardSection>
                                </TouchableOpacity>
                    </View>

                    <View style = {{flexDirection : "row" }}>   
                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Cal name="calendar" size={60} color="white" />
                                                    {`\n`}{`\n`}
                                                         FERTILITY{`\n`}TRACKER </Text>
                                            </View>
                                        </CardSection>  
                                </TouchableOpacity>

                                <TouchableOpacity> 
                                        <CardSection>
                                            <View style = {styles.button}>
                                                <Text  style = {styles.buttonText}>
                                                    <Fontist name="doctor" size={60} color="white" />
                                                    {`\n`}{`\n`}
                                                         BOOK{`\n`}APPOINTMENT</Text>
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
      paddingTop: 40,
      alignItems: 'center',
      marginBottom : 20,
    
    },
    button: {
      marginBottom: 0,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      borderRadius : 10

    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize : 14,
      fontFamily : "OpenSans-Bold"
    }
  });
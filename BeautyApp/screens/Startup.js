import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import BackgroundImage from '../components/backgroundImage';
import NameDesign from '../components/nameDesign';

const Startup = ()=>{
    return(
        <View style={styles.containerOver}>
            <BackgroundImage urlImg={require('../assets/backgroundStartUp.png')}/>
            <View  style={styles.container}>
                <View> 
                <Image
                    style={{
                    }}
                    source={require('../assets/LOGO.png')}/>
                <Image
                    style={{
                        marginTop:20,
                        marginLeft: 8,
                    }}
                    source={require('../assets/nameApp.png')}
                    />
                </View> 
                <NameDesign/>
            </View>
            {/* <ImageBackground
                source={require('../assets/backgroundStartUp.png')}
                resizeMode='stretch'
                style={styles.backgroundImage}
                >
                <View  style={styles.container}>
                    <Image
                        style={{

                        }}
                        source={require('../assets/LOGO.png')}/>
                    <Image
                        style={{
                            marginTop:15,
                        }}
                        source={require('../assets/nameApp.png')}
                        />
                    <View>  
                        <Text>Design by Hannie Nguyen</Text>
                    </View>
                </View>
            </ImageBackground> */}
        </View>
    )
};

export default Startup;

const styles = StyleSheet.create({
    containerOver:{
        flex: 1,
    },
    container:{
        flex: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})
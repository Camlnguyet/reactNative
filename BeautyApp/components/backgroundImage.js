import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

const BackgroundImage = ({urlImg}) => {
  return (
    <View style={styles.containerOver}>
        <StatusBar
        translucent={false}
        style='auto'
        hidden={false}/>
        <ImageBackground
            source={urlImg}
            resizeMode='cover'
            style={styles.backgroundImage}
            >
        </ImageBackground>
    </View>
  )
}

export default BackgroundImage;

const styles = StyleSheet.create({
    containerOver:{
        flex: 1,
    },
    backgroundImage:{
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
    },
});
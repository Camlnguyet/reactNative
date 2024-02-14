import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import { useFonts } from 'expo-font';

const InputCustom = ({content}) => {
    const [isValid] = useFonts({
        'Comic_Nue_Bold': require('../assets/fonts/ComicNeue-Bold.ttf'),
        'Comic_Nue': require('../assets/fonts/ComicNeue-Regular.ttf'),
    })
    if (!isValid){
        <Text>The text is loading...</Text>
    }
    return(
        <View style={styles.container}>
            <TextInput
                placeholder= {content}
                style={styles.inpUserName}/>
        </View>
    )
}
 
export default InputCustom;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    inpUserName:{
        backgroundColor: '#fff',
        fontFamily: 'Comic_Nue',
        fontSize: 24,
        height: 51,
        width: 320,
        paddingLeft: 22,
        marginBottom: 25,
        borderRadius: 36,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        shadowColor: 'black',
        elevation: 15,
    },
});
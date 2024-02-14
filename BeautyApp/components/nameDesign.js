import { StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';

const NameDesign = () => {
    const [isValid] = useFonts({
        'Comic_Nue_Bold': require('../assets/fonts/ComicNeue-Bold.ttf'),
        'Comic_Nue': require('../assets/fonts/ComicNeue-Regular.ttf'),
    })
    if (!isValid){
        <Text>The text is loading...</Text>
    }
    return(
        <View>
            <Text style={styles.auth}>Designed by Hannie Nguyen</Text>
        </View>
    )
}

export default NameDesign;

const styles = StyleSheet.create({
    auth:{
        fontFamily: 'Comic_Nue_Bold',
        fontSize: 14,
        color: '#F982AC',
        fontSize: 12,
        marginTop: 50,
        paddingTop: 100,
    },
})
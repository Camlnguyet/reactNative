import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useFonts } from 'expo-font';

const BtnLogin = () => {
    const [isValid] = useFonts({
        'Comic_Nue': require('../assets/fonts/ComicNeue-Bold.ttf'),
    })
    if (!isValid){
        <Text>The text is loading...</Text>
    }
    return(
        <View>
            <Pressable
                style={styles.btn}>
                    <Text style={styles.btnText}>LOGIN</Text>
            </Pressable>
        </View>
    )
}

export default BtnLogin;

const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F982AC',
        borderWidth: 1,
        borderRadius: 35,
        width: 122,
        height: 40,
        backgroundColor: '#F982AC',
    },
    btnText:{
        color: '#ffff',
        fontSize: 24,
        fontFamily: 'Comic_Nue',
    },
});
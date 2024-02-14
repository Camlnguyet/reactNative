import { StyleSheet, Text, View, Image, TextInput, Pressable, Dimensions} from 'react-native';
import BackgroundImage from '../components/backgroundImage';
import { useFonts } from 'expo-font';
import InputCustom from '../components/inputLoginRegister';

const Register = () =>{
    const [isValid] = useFonts({
        'Comic_Nue_Bold': require('../assets/fonts/ComicNeue-Bold.ttf'),
        'Comic_Nue': require('../assets/fonts/ComicNeue-Regular.ttf'),
    })
    if (!isValid){
        <Text>The text is loading...</Text>
    }
    return(
        <View style={styles.container}>
            <BackgroundImage urlImg={require('../assets/Register.png')} style={{
                position:'absolute',
                zIndex: 10,
            }}/>
            <View style={styles.containInp}>
                <Image
                    style={{
                        marginLeft: 40,
                        alignSelf: 'flex-start',
                    }}
                    source={require('../assets/backBtn.png')}/>
                <Text style={styles.signUpText}>Sign Up</Text>
                <View style={styles.inpView}>
                    <InputCustom content={'username'}/>
                    <InputCustom content={'name'}/>
                    <InputCustom content={'password'}/>
                    <InputCustom content={'confirm password'}/>
                    <InputCustom content={'address'}/>
                    <InputCustom content={'phone number'}/>
                    <InputCustom content={'email'}/>
                </View>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative',
    },
    signUpText:{
        fontFamily: 'Comic_Nue_Bold',
        fontSize: 40,
        marginBottom: 44,
    },
    containInp:{
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // intView:{
    //     flex: 1,
    //     justifyContent: 'center',
    // },
})
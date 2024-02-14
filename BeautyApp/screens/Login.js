import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native';
import BackgroundImage from '../components/backgroundImage';
import BtnLogin from '../components/btnLogin';
import { useFonts } from 'expo-font';
import NameDesign from '../components/nameDesign';

const Login = () => {
    const [isValid] = useFonts({
        'Comic_Nue_Bold': require('../assets/fonts/ComicNeue-Bold.ttf'),
        'Comic_Nue': require('../assets/fonts/ComicNeue-Regular.ttf'),
    })
    if (!isValid){
        <Text>The text is loading...</Text>
    }
    return(
        <View style={styles.container}>
            <BackgroundImage urlImg={require('../assets/backgroundLogin.png')}/>
            <View style={styles.content}>
                <Image
                    source={require('../assets/miniLogo.png')}/>
                <Image
                    style={{marginTop: 10,}}
                    source={require('../assets/mini1NameApp.png')}/>
                <View style={styles.inpView}>
                    <TextInput
                        placeholder='username'
                        style={styles.inpUserName}/>
                    <TextInput
                        placeholder='password'
                        style={styles.inpUserName}/>
                </View>
                <Text style={styles.forgetPa}>Forget password ?</Text>
                <View style={styles.signUpView}>
                    <Text style={styles.signText}>Don't have an  account yet ? </Text>
                    <Pressable>
                        <Text style={styles.signUpText}>Sign up now</Text>
                    </Pressable>
                </View>
                <BtnLogin/>
                <NameDesign/>
            </View>
        </View>
    )
}
 
export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    content:{
        flex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inpView:{
        marginTop: 118,
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
    forgetPa:{
        alignSelf: 'flex-end',
        fontFamily: 'Comic_Nue_Bold',
        fontSize: 16,
        marginRight: 40,
        marginBottom: 15,
    },
    signUpView:{
        flexDirection:'row',
        marginBottom: 15,
    },
    signText:{
        color: '#797979',
        fontFamily: 'Comic_Nue_Bold',
        fontSize: 15,
    },
    signUpText:{
        color:'#3C3C3C',
        fontFamily: 'Comic_Nue_Bold',
        fontSize: 15,
    },
});
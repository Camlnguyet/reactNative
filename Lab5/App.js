import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground, Pressable, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

// ex1
function App() {
  const [fontError] = useFonts({
    'Nunito' : require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Nunito-Italic': require('./assets/fonts/Nunito-Italic-VariableFont_wght.ttf'),
  })
  if (!fontError){
    <Text>Font is loading</Text>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// ex2
const Screen2 = () => {
  return(
    <View style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
        }}
        // imageStyle={{
        //   height: 300,
        // }}
        source={require('./assets/backgroundScreen.jpg')}
      >
        <View style={styles.detailsContent}>
          <Text style={styles.header}>Discover</Text>
          <Text style={styles.header}>world with us</Text>
          <Text style={styles.paragraph}>The point of using Lorem Ipsum is that it has a more-or-less 
            normal distribution of letters, as opposed to using 'Content here, 
            content here'</Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
        </View>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0)'></StatusBar>
      </ImageBackground>
    </View>
  )
}


const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
// ex3
const Screen3 = () => {
  return (
    <View  style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <ImageBackground
        style={{
          flex: 2,
        }}
        imageStyle={{
          height: 845,
          width: 564,
          opacity: 0.9,
          position: 'absolute',
          left: -20,
          top: -30,
        }}
        resizeMode='stretch'
        source={require('./assets/hoiAn.jpg')}>
        <Text style={{
          fontWeight: 600,
          fontSize: 23,
          position: 'absolute',
          top: 435,
          // bottom: -100,
          paddingLeft: 20,
          color: '#FEFEFE',
        }}>PHỐ CỐ HỘI AN</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 435,
          right: 20,
        }}>
          <Image
            style={{
              width: 27, height: 27,
              marginRight: 5,
            }}
            source={require('./assets/favorite.png')}/>
          <Text style={{color: '#FEFEFE', fontWeight: 'bold',}}>5.0</Text>
        </View>

        {/* I don't have solution for that buttons */}
        {/* <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: '#ffffff80',
          width: '100%',
          top: 25,
          justifyContent: 'space-between',
          paddingRight: 20,
          paddingLeft: 20,
        }}>
          <Image
            style={{
              width: 50, height: 50,
            }}
            source={require('./assets/back.png')}/>
          <Image
            style={{
              width: 40, height: 40,
            }}
            source={require('./assets/dots.png')}/>
        </View> */}
      </ImageBackground>

      <View style={{
        flex: 4,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#FFFFFF',
        maxHeight: 300,
        position: 'absolute',
        bottom: 60,
        // borderWidth: 2,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 14,
        }}>
          <Image 
            style={{ width: 20, height: 20,marginRight: 7,}}
            source={require('./assets/location.png')}/>
          <Text style={{
            color: '#094D93',
            fontWeight: 'bold',
            fontSize: 17,
          }}>Quảng Nam</Text>
        </View>
        
        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          marginBottom: 20,
        }}>Thông tin chuyến đi</Text>
        <Text style={{
          color: '#A6A6A6',
          lineHeight: 21,
        }}>Hội An là một thành phố trực thuộc tỉnh Quảng Nam,
          Việt Nam. Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, 
          gồm những di sản kiến trúc đã có từ hàng trăm năm trước, 
          được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999. 
          Hội An là một thành phố trực thuộc tỉnh Quảng Nam,
          Việt Nam. Phố cổ Hội An từng ...
        </Text>
        <View style={{
          borderColor: 'white',
          borderWidth: 0.5,
          height: 50, width: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: -20,
          right: 20,
          backgroundColor: 'white',
          // shadow
          shadowColor: 'black',
          elevation: 10,
        }}>
          <Image
            style={{
              width: 27, height: 27,
            }}
            source={require('./assets/heart.png')}
          ></Image>
        </View>
        
      </View>
      
      {/* footer */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#034C8C',
        maxHeight: 60,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}>
        <Text style={{color: '#F2F2F2'}}><Text style={{fontSize: 19,}}>$100</Text>/Ngày</Text>
        <Pressable style={{
          height: 45,
          width: 100,
          borderRadius: 10,
          backgroundColor: '#F2F2F2',
        }}>
          <Text style={{ fontWeight: 'bold',color: '#034C8C', lineHeight: 45, textAlign: 'center',}}>Đặt ngay</Text>
        </Pressable>
      </View>

      <StatusBar></StatusBar>
    </View>
  )
}
export default Screen3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test:{
    fontFamily:'Nunito-Italic',
    fontSize: 18,
    fontWeight: '600',
  },
  detailsContent:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 42,
    marginRight: 42,
  },
  header:{
    color:'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  paragraph:{
    color: 'white',
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 17,
  },
  btn:{
    height: 50,
    width: 130,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 8,
  },
  btnText:{
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
});
const stylesScreen = StyleSheet.create({

})

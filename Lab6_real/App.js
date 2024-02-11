import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faCircleQuestion, faComment, faComments, faGear, faHouseChimney, faMugSaucer, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { DrawerContent, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import {LinearGradient} from 'expo-linear-gradient';

// stack navigation
function HomeScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.context}>Chào bạn, đây là màn hình chính</Text>
      <TextInput
        style={styles.btnTen}
        placeholder='Nguyen Van A'
        defaultValue = {text}
        onChangeText={newText => setText(newText)}/>
      <Button title='ĐI TỚI MÀN HÌNH CHI TIẾT'
        onPress={()=> navigation.navigate('Details',{
          otherParam: text,
        })}
        ></Button>
    </View>
  )
}

// stack navigation
function DetailsScreen({route,navigation}){
  const { otherParam} = route.params;
  return(
    // cách nào để chuyển sang string mà không có dấu ""
    // sử dụng nguyên {} để truyền tham số vào mà không cần thay đổi gì cả

    <View style={styles.container}>
      <Text style={styles.contextOne}>Chào bạn, {otherParam}</Text>
      <Text style={styles.contextId}>Id của bạn là: {Math.round(Math.random()*100000)}</Text>

      <View>
        <Button title='TRỞ LẠI BẰNG ~GOBACK~'
          onPress={()=> navigation.goBack()}></Button>
        <Button title='TRỞ LẠI BẰNG ~RESET~'
          onPress={()=> navigation.reset({routes: [{name: 'Home'}]})}></Button>
        <Button title='TRỞ LẠI BẰNG ~POP~'
          onPress={() => navigation.pop()}></Button>
        <Button title='TRỞ LẠI BẰNG ~POPTOTOP~'
          onPress={() => navigation.popToTop()}></Button>
          {/* giải thích ý nghĩa của poptotop */}
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

// bài 1
// function AppStackNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
//         <Stack.Screen name='Home' component={HomeScreen}/>
//         <Stack.Screen name='Details' component={DetailsScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// Drawer Navigation

function Notifications({navigation}){
  return(
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()}
      title='Go back home'/>
    </View>
  )
}

// bài 3
function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
{/* header */}
    <View>
    <LinearGradient
        colors={['#CDB4DB', '#FFC8DD','#BDE0FE','#FFAFCC', '#A2D2FF']}
        start={{x: 0.25, y: 0}}
        end={{x: 1, y: 1}}
        // style={{flex: 1}}
        >
          <View style={styles.drawercontain}>
            <Image 
              style={{
                height: 120, width: 120,
                borderRadius: 60,
                marginTop: 12,
                marginBottom:12,
              }}
              source={require('./assets/avatar.jpg')}/>
            <Text style={styles.drawerContext}>Nguyễn Văn A</Text>
            <Text style={styles.drawerGmail}>vana@gmail.com</Text>
          </View> 
      </LinearGradient>
      </View>  
{/* end of header */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

function DrawerApp({navigation}) {
  return (
      <Drawer.Navigator initialRouteName='Home' 
        drawerContent={(props)=>(
          <CustomDrawer {...props}/>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: "#FFEAA7",
          drawerActiveTintColor: "#F57D1F",
        }}>
        <Drawer.Screen  name='Home' component={HomeScreen}
          options={{
            // {color} => kế thừa màu từ activetincolor vào icon
            drawerIcon: ({color}) => (
              <FontAwesomeIcon icon={faHouseChimney} color={color}/>
            ),
          }}/>
        <Drawer.Screen name='Article' component={Notifications}
          options={{
            drawerIcon: ({color}) => (
              <FontAwesomeIcon icon={faNewspaper} color={color}/>
            )
          }}/>
        <Drawer.Screen name='Chat' component={Notifications}
          options={{
            drawerIcon: ({color}) =>(
              <FontAwesomeIcon icon={faComments} color={color}/>
            )
          }}/>
        <Drawer.Screen name='Setting' component={Notifications}
          options={{
            drawerIcon: ({color}) =>(
              <FontAwesomeIcon icon={faGear} color={color}/>
            )
          }}/>
        <Drawer.Screen name='Help' component={Notifications}
          options={{
            drawerIcon: ({color}) =>(
              <FontAwesomeIcon icon={faCircleQuestion} color={color}/>
            )
          }}/>
      </Drawer.Navigator>
  )
}

// ? lồng Drawer Navigator vào Stack Navigator các bạn đã làm ở bài trước
// NavigationContainer là phần được dùng vào phần tổng của tổng các navigation, còn các phần lẻ nhỏ khác
// thì chỉ được sử dụng Navigator
// cần luyện tập thêm để biết nên lông thế nào
// theo hướng dẫn thì drawer << stack << tab

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Drawer' component={DrawerApp}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function LinearBack(){
  
}

const styles = StyleSheet.create({
  drawercontain:{
    alignItems: 'center',
    flex: 1,
    height: 225,
  },
  drawerContext:{
    textAlign: 'left',
    color: '#F57D1F',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },
  drawerGmail:{
    fontSize: 15,
  },
  container: {
    width:'80%',
    flex: 1,
    alignSelf:'center',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btnTen:{
    width: '100%',
    backgroundColor: '#ffff',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    marginTop: 12,
    borderRadius: 5,
    paddingLeft: 12,
  },
  context: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
  contextOne: {
    textAlign: 'left',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  contextId:{
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 45,
  },
});

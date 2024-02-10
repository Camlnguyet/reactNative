import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

function AppStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Drawer Navigation

function HomeScreenD({navigation}){
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
        />
    </View>
  )
}

function Notifications({navigation}){
  return(
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()}
      title='Go back home'/>
    </View>
  )
}


const Drawer = createDrawerNavigator();

function DrawerApp({navigation}) {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName='HomeD'>
        <Drawer.Screen name='HomeD' component={HomeScreenD}/>
        <Drawer.Screen name='Notifications' component={Notifications}/>
        <Drawer.Screen name='Article' component={Notifications}/>
        <Drawer.Screen name='Chat' component={Notifications}/>
        <Drawer.Screen name='Setting' component={Notifications}/>
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

// ? lồng Drawer Navigator vào Stack Navigator các bạn đã làm ở bài trước

export default function App(){
  return(
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Drawer' component={DrawerApp}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
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

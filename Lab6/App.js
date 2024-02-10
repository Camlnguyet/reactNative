import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native';
// import 'react-native-gesture-handler';
// import { AppRegistry } from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={()=> navigation.navigate('Details')}
        >
        
      </Button>
    </View>
  )
}

function DetailsScreen() {
  return(
    <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
      <Text>
        Details Screen
      </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{title:'Overview'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

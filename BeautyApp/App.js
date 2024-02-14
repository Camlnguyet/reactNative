import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Startup from './screens/Startup.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';

export default function App() {
  return <Register/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

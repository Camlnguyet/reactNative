import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// Ex2
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{
          marginTop: 0,
          height: 418,
          width: 481,
          opacity: 0.5,
          position: 'absolute',
          left: -95,
        }}
        resizeMode='stretch'
        source={require('./assets/React-icon.svg.png')}>
      
        <Text style={styles.noteVersion}>Engine: Hermes for RN 0.71.8</Text>
        <Text style={styles.headerText}>Welcome to React Native</Text>
  
      <View style={styles.contentBox}>
        <View>
          <Text style={styles.title}>Step One</Text>
          <Text style={styles.content}>
            Edit <Text style={styles.contentTitle}>App.tsx</Text> to change this screen and then come back to see your edits.</Text>
        </View>
        <View>
          <Text style={styles.title}>See Your Changes</Text>
          <Text style={styles.content}> 
            Double tap <Text style={styles.contentTitle}>R</Text> on your keyboard to reload your app's code.</Text>
        </View>
        <View>
          <Text style={styles.title}>Debug</Text>
          <Text style={styles.content}> 
            Press <Text style={styles.contentTitle}>Cmd or Ctrl + M</Text> or <Text style={styles.contentTitle}>Shake</Text> your device to open the React Native debug menu.</Text>
        </View>
        <View>
          <Text style={styles.title}>Learn More</Text>
          <Text style={styles.content}>Read the docs to discover what to do next: </Text>
        </View>
      </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

// Ex3 
const Footballer = () => {
  const players = [
    {name: 'Messi', goals: 30},
    undefined,
    {name: 'Ronaldo', goals: 28},
    {name: 'Neyma', goals: 22},
    {goals: 2},
    {name: 'Mbappe', goals: 25},
    {name: 'Pele', goals: null},
  ];
  const checkPlayers = ({name,goals}) => {
    return !!name && !!goals;
  };
  const Result = () => {
    return
  }

  return (
    <View>
      {checkPlayers(players)}
    </View>
  )
}

export default Footballer;

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  noteVersion:{
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  headerText: {
    marginTop: 80,
    marginBottom: 45,
    alignSelf: 'center',
    width: 250,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentBox:{
    backgroundColor: '#fff',
    padding: 25,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  content:{
    fontSize: 17,
  },
  contentTitle:{
    fontWeight: 'bold',
  },
});

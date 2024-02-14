import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { Image, 
  FlatList, FlatListComponent, SafeAreaView ,StyleSheet, 
  Text, View, Pressable, Modal, ScrollView, RefreshControl, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBarStyle } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  
// data flatlist
const DATA = [
  {
    id: '1',
    name: 'Miyah Myles',
    position: 'Data Entry Clerk',
    photo: require('./assets/avatar_1.jpg'),
  },
  {
    id: '2',
    name: 'June Cha',
    position: 'Sales manager',
    photo: require('./assets/avatar_2.jpg'),
  },
  {
    id: '3',
    name: 'Iida Niskanen',
    position: 'Sales manager',
    photo: require('./assets/avatar_3.jpg'),
  },
  {
    id: '4',
    name: 'Renee Sims',
    position: 'Medical Assistant',
    photo: require('./assets/avatar_4.jpg'),
  },
  {
    id: '5',
    name: 'Jonathan Nun~ez',
    position: 'Clerical',
    photo: require('./assets/avatar_5.jpg'),
  },
  {
    id: '6',
    name: 'Sasha Ho',
    position: 'Administrative Assistant',
    photo: require('./assets/avatar_6.jpg'),
  },
  {
    id: '7',
    name: 'Abdullah Hadley',
    position: 'Marketing',
    photo: require('./assets/avatar_7.jpg'),
  },
  {
    id: '8',
    name: 'Thomas Stock',
    position: 'Product Designer',
    photo: require('./assets/avatar_8.jpg'),
  },
  {
    id: '9',
    name: 'Sasha Ho',
    position: 'Clerical',
    photo: require('./assets/avatar_9.jpg'),
  },
  {
    id: '10',
    name: 'Renee Sims',
    position: 'Medical Assistant',
    photo: require('./assets/avatar_10.jpg'),
  },
];

const FlatListDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nameCalling, setNameCalling] =  useState('');
  const [photoCalling, setPhotoCalling] =useState('');

  const Item = ({name,photo,position}) => (
    <View style={styles.item}>
      <Image
        style={{
          width: 60, height: 60,
          borderRadius: 30,
        }}
        source={photo}
        />
      <View style={styles.itemInfor}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>
      <Pressable
        onPress={()=> 
          {setModalVisible(true);
           setNameCalling(name); 
           setPhotoCalling(photo);
          }}>
        <Text style={styles.pressCall}>Call</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(!modalVisible)}>
          <View style={styles.containerCalling}>
            <View style={styles.modalCalling}>
            <View style={styles.detailCalling}>
              <Image
                style={{
                  width: 60, height: 60,
                  borderRadius: 30,
                  marginBottom: 20,
                }}
                source={photoCalling}
              />
              <Text style={styles.callingName}>{nameCalling}</Text>
              <Text style={styles.contextCalling}>Calling...</Text>
            </View>
                <Pressable
                    onPress={() => setModalVisible(false)}>
                      <Image 
                      style={{
                        height: 60, width: 60,
                      }}
                      source={require('./assets/phone.png')}/>
                </Pressable>
            </View>
          </View>
      </Modal>

      <FlatList
        data={DATA}
        renderItem={({item}) => 
            <Item name={item.name} 
                photo={item.photo}
                position={item.position}
                />
          }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};


// chưa tìm hiểu kỹ bài này nên là bỏ qua nó, làm sau nhá
const StatusB = () => {
  // const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
  // const [refreshing, setReFreshing] = React.useState(false);
  // const onRefresh = () =>{

  // };
  return(
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={true}/>
        
      }>
        <StatusBar
          // barStyle={barStyle}
          translucent
          backgroundColor={'transparent'}
        />
      <Text>Kéo xuống để đổi màu StatusBar</Text>
    </ScrollView>
  )
}

const Login = () => {
	// State variable to hold the password 
	const [password, setPassword] = useState(''); 
	// State variable to track password visibility 
	const [showPassword, setShowPassword] = useState(false); 
	// Function to toggle the password visibility state 
	const toggleShowPassword = () => { 
		setShowPassword(!showPassword); 
	}; 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.containerLogin}>
        <Text style={styles.quoteLogin}>Hi Welcome Back!
          <Image
            style={{
              width: 40, height: 40,
            }}
            source={require('./assets/waving-hand.png')}/>
        </Text>
        <Text>Hello again you have been missed!</Text>
        <Image
          style={{
            width: 300, height: 233,
            alignSelf:'center',
            marginBottom: 30,
            marginTop: 20,
          }}
          source={require('./assets/cover-login.jpg')}/>
        <View>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            blurOnSubmit={true}
            style={styles.inpText}
            placeholder='Enter your email address'
          />
        </View>
        {/* <View>
          <TextInput
            secureTextEntry={isPasswordShown}
            style={styles.inpText}
            placeholder='Enter your password'
          />
          <Image
            style={{
              width: 40, height: 40,
            }}
            source={require('./assets/view.png')}
            />
        </View> */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.containerPassword}> 
				<TextInput 
					// Set secureTextEntry prop to hide 
					//password when showPassword is false 
					secureTextEntry={!showPassword} 
					value={password} 
					onChangeText={setPassword} 
					style={styles.input} 
					placeholder="Enter Password"
					placeholderTextColor="#aaa"
				/> 
				<MaterialCommunityIcons 
					name={showPassword ? 'eye-off' : 'eye'} 
					size={24} 
					color="#aaa"
					style={styles.icon} 
					onPress={toggleShowPassword} 
				/> 
			</View>
        <View style={styles.login}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={styles.loginWith}>Or Login with</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <View>
          
        </View>
        <View style={styles.groupBtn}>
          <TouchableOpacity style={styles.btnMedia}>
            <Image
              style={{
                width: 40, height: 40,
              }}
              source={require('./assets/facebook.png')}
              />
            <Text style={{color: 'grey'}}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnMedia}>
            <Image 
              style={{
                width: 40, height: 40,
              }}
              source={require('./assets/google.png')}/>
            <Text style={{color: 'grey'}}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text>Don't have an account? </Text>
          <Pressable >
              <Text style={styles.pressRegister}>Register</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default Login;

const styles = StyleSheet.create({
  containerLogin:{
    margin: 20,
  },
  quoteLogin:{
    lineHeight: 52,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
  },
  label:{
    fontSize: 16,
    color: 'grey',
  },
  inpText:{
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  containerPassword: { 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center', 
		borderRadius: 8, 
		paddingHorizontal: 14, 
    height: 50,
    borderWidth: 0.5,
    paddingLeft: 15,
    marginBottom: 15,
    marginTop: 10,
	}, 
	input: { 
		flex: 1, 
		paddingVertical: 10, 
		paddingRight: 10, 
	}, 
	icon: { 
		marginLeft: 10, 
	},
  login:{
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  loginWith:{
    textAlign: 'center',
    color: 'grey',
    marginRight: 5,
    marginLeft: 5,
  },
  groupBtn:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  btnMedia:{
    // flex: 1,
    borderColor: '#808080',
    borderWidth: 1.2,
    borderRadius: 10,
    height: 50,
    width: 170,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  register:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pressRegister:{
    color: 'violet',
  },
  container:{
    backgroundColor: '#DCDCDC',
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  containerCalling:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCalling: {
    backgroundColor: '#22333b',
    // height, width
    width: '100%',
    height: '100%',
    // padding
    padding: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
  }, 
  detailCalling:{
    alignItems:'center',
  },
  callingName:{
    color: 'white',
    fontSize: 24,
  }, 
  contextCalling:{
    fontSize: 14,
    color: 'grey',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemInfor:{
    alignItems: 'center',
  },
  title: {
    color:'#696969',
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    color:'#696969',
  },
  pressCall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

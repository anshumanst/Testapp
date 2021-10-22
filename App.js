import React, {useState} from 'react';
// import Feather from 'react-native-vectors-icons/Feather';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


export default function Lpage() {

  const [enterEmail, setEnterEmail] = useState();

  const emailHandler = (enteredText) => {
    setEnterEmail(enteredText);
  };

  const submitBtn = () => {
    // alert()
    alert("Email is : " + enterEmail + " " + "and Password is : " + enterPass);

  };

  const [enterPass, setEnterPass] = useState();

  const passHandler = (enteredTxt) => {
    setEnterPass(enteredTxt);
  };

return(

<View style={styles.container}>
  <View style={styles.header}>
    <Text style = {styles.text_header}>Sign In</Text>
  </View>
  <View style={styles.footer}>

  <Text style={styles.welB}>Welcome Back</Text>
  
  <Text style={styles.intro}>Hello there, sign in to continue!</Text>

    <View><Text style={styles.email}>Username or Email</Text></View>

      <TextInput 
    style={styles.input}
    color= 'black' 
    fontSize= {20}
    placeholder="Enter your username or email"
    placeholderTextColor = "#ACACAC"
    autoCapitalize='none'
    marginTop= {15}
    onChangeText= {emailHandler}
    value = {enterEmail}
    />

    <View><Text style={styles.pass}>Password</Text></View>
      
    <TextInput 
     style={styles.input}
     secureTextEntry
    placeholder="Enter your password"
    placeholderTextColor = "#ACACAC"
    color= 'black' 
    fontSize= {20}
    marginTop= {15} 
    onChangeText= {passHandler}
    value = {enterPass}
    />
    <View><Text style={styles.forpass}>Forget Password?</Text></View>
    <View>
      <TouchableOpacity
      style={styles.logBtn}
      onPress = {submitBtn}
      >
        <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style = {styles.lasttxt}>
          <Text style={styles.noacc}>Don't have an account?</Text>
        </View>
        {/* <View style= {styles.lasttxt2}>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View> */}
      </View>
  </View>

</View>
)
}

const styles = StyleSheet.create({

 input:{
  width: '90%',
  marginLeft: 20,
  backgroundColor: "#F5F5F6",
  padding: 15,
  marginBottom: 10,
  // borderWidth: 2,
  borderRadius: 20, 
  textShadowColor: '#000000'
},
 container:{
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#406ACF',
  },
 logBtn:{
  backgroundColor: "#406ACF",
  flexDirection: 'row',
  justifyContent: 'center',
  padding:15,
  marginBottom: 10,
  marginLeft:20,
  borderRadius: 20,
  marginTop: 10
 },
 btnText:{
   color: 'white',
   fontSize: 20,
 },
 welcome: {
  fontSize: 30,
  textAlign: 'center',
  margin: 10,
  color: '#fff',
},
header: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#406ACF',
  alignItems: 'baseline'
},
footer: {
  flex: 4,
  backgroundColor: '#ffff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingVertical: 50,
  paddingHorizontal: 30
},
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30,
  marginLeft: 50
},
welB: { fontSize: 30, color: '#000000', fontWeight: 'bold', marginLeft: 20 },
intro: { fontSize: 20, color: '#ACACAC', fontWeight: 'bold', marginLeft: 20},
email: { fontSize: 18, color: '#ACACAC', marginTop: 25, marginLeft: 20 },
pass: { fontSize: 18, color: '#ACACAC', marginTop: 1, marginLeft: 20 },
forpass: { fontSize: 18, color: '#406ACF', fontWeight: 'bold', marginTop: 10, marginLeft: 20 },
noacc: { fontSize: 18, color: '#406ACF', marginTop: 150, justifyContent: 'center', marginLeft: 65 },
lasttxt: { flex: 3, flexDirection: 'row-reverse' },
lasttxt2: { flex: 1, flexDirection: 'row' }
});


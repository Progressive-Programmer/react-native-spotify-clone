import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import {Button, Input, Image} from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container} >
            <StatusBar style="light" />
            
            <Image source={{
                uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
            }} 
            style={{width:200, height:200}}
            />
            <View style={styles.inputContainer} >
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>{setEmail(text)}}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(pass=>setPassword(pass))} />
                <Button containerStyle={styles.button} title="Login" onPress={()=>{signIn()}}/>
                <Button containerStyle={styles.button} title="Register" type="outline" onPress={()=> navigation.navigate("Register")}  />
                {/* <View style={{height:100}} /> */}
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",

    },
    inputContainer:{ 
        width:300,
        alignItems: "center",
    },
    button:{
        width: 200,
        marginTop:10,
    },
})




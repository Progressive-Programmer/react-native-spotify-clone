import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import {Button, Input, Image, Text} from 'react-native-elements';

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageURL] = useState('')

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        })
        console.log('---',navigation )
    },[navigation])

    const register = () => {

    }

    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}  >
            <StatusBar style="light" />
            <Text h3 style={{marginBottom:50}} >
                 Create a Signal Account
            </Text>
            <View style={styles.inputContainer} >
                <Input 
                placeholder="Full Name" 
                autoFocus 
                type="text" 
                value={name} 
                onChangeText={(text)=> {setName(text)}} 
                />
                <Input 
                placeholder="Email" 
                 
                type="text" 
                value={email} 
                onChangeText={(text)=> {setEmail(text)}} 
                />
                <Input 
                placeholder="Password" 
                 
                secureTextEntry
                value={password} 
                onChangeText={(text)=> {setPassword(text)}} 
                />
                <Input 
                placeholder="Profile Picture URL (optional)" 
                value={imageUrl} 
                onChangeText={(text)=> {setImageURL(text)}}
                onSubmitEditing={register} 
                />
            </View>
            <Button
            containerStyle={styles.button}
            raised
            onPress={register}
            title="Register"
            />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    button:{
        width:200,
        marginTop:10
    },
    inputContainer:{
        width:300,
    }

})

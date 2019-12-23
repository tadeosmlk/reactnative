//import libraries
import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';

//create a component
class Login extends Component{
    render() {
        return {
            <View style={styles.container}>
                <Text>Login</Text>
            </View>

            <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} />
            </View>

            <View style={styles.formContainer}>
           <LoginForm />
            </View>



        };
    }
}

//define styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }

});
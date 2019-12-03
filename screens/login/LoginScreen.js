import React from 'react';
import {Text, View, TextInput, Button, Alert} from "react-native";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
// import {Button} from "react-native-web";

import styles from './styles'

class LoginScreen extends React.Component {

    state={
        username:'',
        password:''
    };

    login =[
        {
            username:'qwe',
            password:'qwe'
        },
        {
            username:'qwer',
            password:'qwer'
        },
        {
            username:'qwert',
            password:'qwert'
        },
        {
            username:'qwerty',
            password:'qwerty'
        },
        {
            username:'qwertyu',
            password:'qwertyu'
        }
    ]

    Login(){
        const{username,password} =this.state;
        const loginError =this.login.filter((item)=>{ return  item.username===username && item.password===password  })
        console.log(loginError.length)
        if( loginError.length ) {
            this.props.navigation.navigate('Settings')
        }else {
            Alert.alert('Error','Error error error error error ',[{text:'ok'}])
        }
    }
    render() {
        const{ username, password } = this.state;
        return (
            <View style={{ flex: 1, marginTop:40, padding:20 }}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder='User name'
                    valzue={username}
                    onChangeText={(text)=>{this.setState({username:text})}}
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={(text)=>{this.setState({password:text})}}
                />
                {!!password && !!username &&
                <Button
                    style={styles.button}
                    title={'Go'}
                    onPress={()=>this.Login()}
                />}
            </View>
        );
    }
}


export default LoginScreen
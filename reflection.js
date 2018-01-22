/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
} from 'react-native';

import GoogleSignIn from 'react-native-google-sign-in';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Reflection extends Component {
  async googleSignIn() {
    await GoogleSignIn.configure({
      // iOS
      clientID: '346943749281-jftpj4cs8p4v943mjllnhirus2rn9qj1.apps.googleusercontent.com',
  
      // iOS, Android
      // https://developers.google.com/identity/protocols/googlescopes
      scopes: ['https://www.googleapis.com/auth/drive.appdata'],
  
      // iOS, Android
      // Whether to request email and basic profile.
      // [Default: true]
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a06bf16b507496b126d25ea909d366ba4
      shouldFetchBasicProfile: true,
  
      // iOS
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a486c8df263ca799bea18ebe5430dbdf7
      // language: string,
  
      // iOS
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd
      // loginHint: string,
  
      // iOS, Android
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#ae214ed831bb93a06d8d9c3692d5b35f9
      // serverClientID: 'yourServerClientID',
  
      // Android
      // Whether to request server auth code. Make sure to provide `serverClientID`.
      // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#requestServerAuthCode(java.lang.String, boolean)
      // offlineAccess: boolean,
      
      // Android
      // Whether to force code for refresh token.
      // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#requestServerAuthCode(java.lang.String, boolean)
      // forceCodeForRefreshToken: boolean,
  
      // iOS
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a211c074872cd542eda53f696c5eef871
      // openIDRealm: string,
  
      // Android
      // https://developers.google.com/android/reference/com/google/android/gms/auth/api/signin/GoogleSignInOptions.Builder.html#setAccountName(java.lang.String)
      // accountName: 'yourServerAccountName',
  
      // iOS, Android
      // https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a6d85d14588e8bf21a4fcf63e869e3be3
      // hostedDomain: 'yourHostedDomain',
    });
  
    const user = await GoogleSignIn.signInPromise();
  
    console.log(user);
  }

  googleSignInTest() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Peeyush!
        </Text>
        <Button
          onPress={this.googleSignIn}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

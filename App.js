import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
   return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode='contain'></Image>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#ffffff', opacity: 1}]}>
          <Text style={styles.buttonText}>sign in with GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>sign in with GitHub Enterprise</Text>
        </TouchableOpacity>
      <Text style={styles.text}>Forgot Your Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 90,
    height: 100,
    margin: 'auto',
  },
  text: {
    marginTop: 15,
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    width: "100%",
    textTransform: 'uppercase',
  },
});

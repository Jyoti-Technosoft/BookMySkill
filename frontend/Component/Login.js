import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Layout, Input, Button, Icon, Text } from '@ui-kitten/components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = async () => {
    try {
      console.log('payload:', JSON.stringify({ email, password }));
      const response = await fetch('http://192.168.x.x:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response:====>", response)
      // if (!response.ok) {
      //   throw new Error('Invalid username or password.');
      // }
      // const data = await response.json();
      // Alert.alert('Login Successful', `Welcome, ${data.email}!`);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderEyeIcon = (props) => (
    // <TouchableOpacity onPress={toggleSecureEntry}>
    //   <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    // </TouchableOpacity>
    <TouchableOpacity onPress={toggleSecureEntry}>
      <Image
        source={secureTextEntry ? require('../public/images/eye_icon.png') : require('../public/images/eye_off_icon.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  return (
    <Layout style={styles.container}>
      <Text category="h1" style={styles.title}>
        Login
      </Text>
      <Input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        accessoryRight={renderEyeIcon}
      />
      <Button onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#6D30ED',
    borderColor: '#6A00FF',
  },
});
export default Login;
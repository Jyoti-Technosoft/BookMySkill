import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Alert } from 'react-native';
import { Layout, Input, Button, Icon, Text } from '@ui-kitten/components';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure AsyncStorage is installed

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const { userId, token } = data;

        // await AsyncStorage.setItem('userId', userId.toString());
        // await AsyncStorage.setItem('authToken', token);

        navigation.replace('Category');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderEyeIcon = (props) => (
    <TouchableOpacity onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={secureTextEntry ? 'eye-off' : 'eye'}
        style={styles.icon}
        fill="#8F9BB3"
      />
    </TouchableOpacity>
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.flower}>
        <Image source={require('../public/images/logo192.png')} style={styles.image} />
      </View>
      <Text category="h1" style={styles.title}>
        Login
      </Text>
      <Input
        label="Email"
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        status={emailError ? 'danger' : 'basic'}
        caption={emailError}
      />
      <Input
        label="Password"
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        accessoryRight={renderEyeIcon}
        status={passwordError ? 'danger' : 'basic'}
        caption={passwordError}
      />
      <Button onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Text style={styles.signupText} onPress={() => navigation.navigate('Registration')}>
        Don't have an account?{' '}
        <Text style={styles.signupUnderline}>Sign Up</Text>
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  flower: {
    width: 90,
    height: 90,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 6,
    backgroundColor: '#6D30ED',
    borderColor: '#6A00FF',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
  },
  signupUnderline: {
    textDecorationLine: 'underline',
    color: '#3798e9',
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Login;
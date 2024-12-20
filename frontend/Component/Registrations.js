import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Button,
  Select,
  SelectItem,
  Icon
} from '@ui-kitten/components';

import db from "../db.json";

const SocialButton = ({ title, borderColor = '#000', color = '#000', imageSource }) => (
  <TouchableOpacity style={[styles.socialButton, { borderColor }]} appearance="outline">
    <View style={styles.buttonContent}>
      {imageSource && (
        <Image source={imageSource} style={styles.icon} />
      )}
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Registration = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const countries = db?.Registrations?.countries || [];

  const renderCountryOption = (country) => (
    <SelectItem
      key={country.code}
      title={() => (
        <View style={styles.option}>
          <Image source={{ uri: country.flag }} style={styles.flagImage} />
        </View>
      )}
    />
  );
  const selectedCountryData = countries.find(
    (country) => country.code === selectedCountry
  );

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
  const handleContinue = () => {
    setPhoneError('');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }
    setShowUserDetailsForm(true);
  };
  
  // const handleSubmit = async () => {
  //   setFirstNameError('');
  //   setEmailError('');
  //   setPasswordError('');
  
  //   if (!firstName) {
  //     setFirstNameError('First Name is required.');
  //     return;
  //   }
  
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!email || !emailRegex.test(email)) {
  //     setEmailError('Please enter a valid email address.');
  //     return;
  //   }
  
  //   if (!password) {
  //     setPasswordError('Password is required.');
  //     return;
  //   }
  
  //   if (password.length < 6) {
  //     setPasswordError('Password must be at least 6 characters.');
  //     return;
  //   }
  
  //   try {
  //     const response = await fetch('http://10.0.2.2:5000/user/signUp', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         firstName,
  //         email,
  //         password,
  //       }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       Alert.alert('Success', 'Signed up successfully! Please log in.');
  //       navigation.replace('Login');
  //     } else {
  //       throw new Error('Unexpected response from the server.');
  //     }
  //   } catch (error) {
  //     console.error('Request failed', error);
  //     Alert.alert('Error', error.message || 'An error occurred. Please try again.');
  //   }
  // };

  const handleSubmit = async () => {
    setFirstNameError('');
    setEmailError('');
    setPasswordError('');
    setPhoneError('');
    
    if (!phoneNumber) {
      setPhoneError('Phone number is required.');
      return;
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Validate other fields
    if (!firstName) {
      setFirstNameError('First Name is required.');
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
  
    if (!password) {
      setPasswordError('Password is required.');
      return;
    }
  
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }
  
    try {
      const response = await fetch('http://10.0.2.2:5000/user/signUp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
          password,
          phoneNumber,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert('Success', 'Signed up successfully! Please log in.');
        navigation.replace('Login');
      } else {
        throw new Error('Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Request failed', error);
      Alert.alert('Error', error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Layout style={styles.layout}>
          <Text category="h5" style={styles.headerText}>
            Create an account
          </Text>
          {!showUserDetailsForm ? (
            <>
              <Text category="s1" style={styles.subHeaderText}>
                Enter your mobile number:
              </Text>
              <Layout style={styles.phoneContainer}>
                {/* <Select
                  style={styles.select}
                  selectedIndex={countries.findIndex(
                    (country) => country.code === selectedCountry
                  )}
                  onSelect={(index) =>
                    setSelectedCountry(countries[index.row].code)
                  }
                >
                  {countries.map((country) => (
                    <SelectItem key={country.code} title={country.name} />
                  ))}
                </Select> */}
                <Select
                  style={styles.select}
                  value={() => (
                    <View style={styles.option}>
                      <Image
                        source={{ uri: selectedCountryData.flag }}
                        style={styles.flagImage}
                      />
                    </View>
                  )}
                  selectedIndex={countries.findIndex(
                    (country) => country.code === selectedCountry
                  )}
                  onSelect={(index) =>
                    setSelectedCountry(countries[index.row].code)
                  }
                >
                  {countries.map(renderCountryOption)}
                </Select>
                <Input
                  style={styles.input}
                  placeholder="+1 Mobile number"
                  keyboardType="numeric"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  status={phoneError ? 'danger' : 'basic'}
                  caption={phoneError}
                />
              </Layout>
              <Button style={styles.continueButton} onPress={handleContinue}>
                Continue
              </Button>
              <Text category="s1" style={styles.orText}>
                or
              </Text>
              <SocialButton
                title="Continue with Apple"
                borderColor="#5A5C60"
                color="#5A5C60"
                imageSource={require('../public/images/apple-icon.png')}
              />
              <SocialButton
                title="Continue with Facebook"
                borderColor="#5CACE7"
                color="#5CACE7"
                imageSource={require('../public/images/fb-icon.png')}
              />
              <SocialButton
                title="Continue with Google"
                borderColor="#DE3A3E"
                color="#DE3A3E"
                imageSource={require('../public/images/google-icon.png')}
              />
              <Text style={styles.agreementText}>
                By signing up, you agree to our{" "}
                <Text style={styles.agreementUnderlineText}>Terms of Service</Text> and{" "}
                <Text style={styles.agreementUnderlineText}>Privacy Policy</Text>.
              </Text>
            </>
          ) : (
            <>
              {/* <Text category="s1" style={styles.subHeaderText}>
                Enter your details:
              </Text> */}
              <Input
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={{ marginBottom: 20 }}
                status={firstNameError ? 'danger' : 'basic'}
                caption={firstNameError}
              />
              <Input
                label="Phone Number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ marginBottom: 20 }}
                status={passwordError ? 'danger' : 'basic'}
                caption={passwordError}
              />
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
                status={emailError ? 'danger' : 'basic'}
                caption={emailError}
              />
              <Input
                label="Password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry} 
                style={{ marginBottom: 20 }}
                status={passwordError ? 'danger' : 'basic'}
                caption={passwordError}
                accessoryRight={renderEyeIcon}
              />
              <Button style={styles.submitButton} onPress={handleSubmit}>
                Submit
              </Button>
            </>
          )}
          <View style={styles.footer}>
            <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
              Already have an account?
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <Text style={styles.footerUnderlineText}>Log in</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff"
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  layout: {
    flex: 1,
  },
  headerText: {
    marginBottom: 20,
  },
  subHeaderText: {
    marginBottom: 8,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  select: {
    width: 75,
    marginRight: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagImage: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  optionText: {
    fontSize: 16,
  },
  input: {
    flex: 1,
  },
  continueButton: {
    borderColor: "#6D30ED",
    backgroundColor: "#6D30ED",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
  },
  socialButton: {
    marginBottom: 10,
    backgroundColor: "white",
    height: 45,
    borderWidth: 1.2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 600,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  agreementText: {
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 45,
    color: '#A4A6B0',
  },
  agreementUnderlineText: {
    textDecorationLine: 'underline',
    color: '#A4A6B0',
  },
  submitButton: {
    marginBottom: 20,
    borderColor: "#6D30ED",
    backgroundColor: "#6D30ED",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
    marginVertical: 20,
  },
  footerUnderlineText: {
    color: '#3598E7',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginLeft: 10,
    marginVertical: -5,
  }
});
export default Registration;
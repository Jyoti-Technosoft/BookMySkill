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
  const countries = db?.Registrations?.countries || [];
  // const countries = [
  //   { code: 'US', name: 'United States', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s' },
  //   { code: 'IN', name: 'India', flag: 'https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png' },
  //   { code: 'UK', name: 'United Kingdom', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s' },
  // ];
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
  const handleContinue = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return;
    }
    setShowUserDetailsForm(true);
  };
  const handleSubmit = async () => {
    navigation.replace('Login');
    try {
      const response = await fetch('http://localhost:5000/user/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          email,
          phoneNumber,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      const data = await response.json();
      // Alert.alert('Success', 'You have successfully signed up!');
    } catch (error) {
      // Alert.alert('Error', error.message);
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
              <Text category="s1" style={styles.subHeaderText}>
                Enter your details:
              </Text>
              <Input
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={{ marginBottom: 20 }}
              />
              <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
              />
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ marginBottom: 20 }}
              />
              <Button style={styles.submitButton} onPress={handleSubmit}>
                Submit
              </Button>
            </>
          )}
          <View style={styles.footer}>
            <Text style={{ fontSize: 18, fontWeight: 'normal' }}>Already had an account?   <Text style={styles.footerUnderlineText}>Log in</Text></Text>
            {/* <Button appearance="ghost"></Button> */}
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
    fontWeight: 'normal'
  }
});
export default Registration;
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Alert,
} from 'react-native';
import {
  Layout,
  Text,
  Input,
  Button,
  Select,
  SelectItem,
} from '@ui-kitten/components';

const SocialButton = ({ title, borderColor = '#000', color = '#000' }) => (
  <Button
    style={{
      borderColor,
      borderWidth: 1,
      marginBottom: 10,
      backgroundColor: "white",
    }}
    appearance="outline"
    textStyle={{ color }}
  >
    {title}
  </Button>
);
const Registration = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'UK', name: 'United Kingdom' },
  ];
  const handleContinue = () => {
    setShowUserDetailsForm(true);
  };
  const handleSubmit = async () => {
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
      Alert.alert('Success', 'You have successfully signed up!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <Layout style={{ flex: 1 }}>
          <Text category="h1" style={{ marginBottom: 20 }}>
            Create an account
          </Text>
          {!showUserDetailsForm ? (
            <>
              <Text category="s1" style={{ marginBottom: 8 }}>
                Enter your mobile number:
              </Text>
              <Layout style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Select
                  style={{ width: 100, marginRight: 10 }}
                  selectedIndex={countries.findIndex(country => country.code === selectedCountry)}
                  onSelect={index => setSelectedCountry(countries[index.row].code)}
                >
                  {countries.map(country => (
                    <SelectItem key={country.code} title={country.name} />
                  ))}
                </Select>
                <Input
                  style={{ flex: 1 }}
                  placeholder="+1 Mobile number"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </Layout>
              <Button
                style={{
                  marginBottom: 20,
                  borderColor: '#6D30ED',
                  backgroundColor: '#6D30ED',
                }}
                onPress={handleContinue}
              >
                Continue
              </Button>
              <Text category="s1" style={{ textAlign: 'center', marginVertical: 10 }}>
                or
              </Text>
              <SocialButton title="Continue with Apple" borderColor="#5A5C60" color="#5A5C60" />
              <SocialButton title="Continue with Facebook" borderColor="#5CACE7" color="#5CACE7" />
              <SocialButton title="Continue with Google" borderColor="#DE3A3E" color="#DE3A3E" />
              <Text style={{ textAlign: 'center', marginTop: 20 }}>
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </Text>
            </>
          ) : (
            <>
              <Text category="s1" style={{ marginBottom: 8 }}>
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
              <Button
                style={{
                  marginBottom: 20,
                  borderColor: '#6D30ED',
                  backgroundColor: '#6D30ED',
                }}
                onPress={handleSubmit}
              >
                Submit
              </Button>
            </>
          )}
          <View style={{ marginTop: 'auto', alignItems: 'center', marginVertical: 20 }}>
            <Text>Already have an account?</Text>
            <Button appearance="ghost">
              Log in
            </Button>
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registration;
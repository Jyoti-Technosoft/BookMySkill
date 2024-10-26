import React, { useState } from 'react';
import { Layout, Input, Button, Avatar } from '@ui-kitten/components';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
const ProfileSettings = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const handleClose = () => {
    window.location.reload();
  };
  const handleSave = () => {
    console.log({ name, phone, email, password, birthday });
  };
  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile settings</Text>
        <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
          <Image
            source={{ uri: 'https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png' }}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar
          size="giant"
          source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }} // Replace with real image URL
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png' }}
            style={styles.editIconImage}
          />
        </TouchableOpacity>
      </View>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Input
        label="Phone"
        placeholder="Enter your phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Input
        label="Birthday"
        placeholder="Set Birthday"
        value={birthday}
        onChangeText={setBirthday}
        style={styles.input}
      />
      <Button style={styles.saveButton} onPress={handleSave}>
        Save changes
      </Button>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: height * 0.03,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif-medium',
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    padding: 5,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: height * 0.05,
    position: 'relative',
  },
  avatar: {
    width: width * 0.40,
    height: width * 0.40,
    borderRadius: (width * 0.40) / 2,
  },
  editIcon: {
    position: 'absolute',
    top: -10,
    right: 110,
    backgroundColor: '#6A00FF',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconImage: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  input: {
    marginBottom: height * 0.01,
    height: height*0.08,
    color: '#474C59'
    },
  saveButton: {
    marginTop: height * 0.03,
    backgroundColor: '#6A00FF',
    borderColor: '#6A00FF',
  },
});
export default ProfileSettings;
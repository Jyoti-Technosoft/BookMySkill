import React, { useState } from 'react';
import { Layout, Input, Button, Avatar, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ProfileSettings = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    birthday: '',
  });

  const handleClose = () => {
    navigation.replace('Login');
  };

  const handleSave = () => {
    // Validate inputs before saving
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // If there are no errors, proceed with saving
      navigation.replace('Category');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      validationErrors.phone = 'Please enter a valid phone number';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (!birthday.trim()) {
      validationErrors.birthday = 'Please enter a valid birthday';
    }

    return validationErrors;
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

  const renderEditIcon = (props) => (
    <Icon
      {...props}
      name="edit-2"
      style={styles.editIconImage}
      fill="#fff"
    />
  );

  const renderCloseIcon = (props) => (
    <Icon
      {...props}
      name="close-outline"
      style={styles.closeIconImage}
      fill="#9194a3"
    />
  );

  return (
    <View style={styles.cardContainer}>
      <Layout style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile settings</Text>
          <TouchableOpacity style={styles.closeIcon} onPress={handleClose}>
            {renderCloseIcon()}
          </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar
            size="giant"
            source={{
              uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            {renderEditIcon()}
          </TouchableOpacity>
        </View>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.name ? 'danger' : 'basic'}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Input
          label="Phone"
          placeholder="Enter your phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.phone ? 'danger' : 'basic'}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.email ? 'danger' : 'basic'}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          accessoryRight={renderEyeIcon}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.password ? 'danger' : 'basic'}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <Input
          label="Birthday"
          placeholder="Set Birthday"
          value={birthday}
          onChangeText={setBirthday}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.birthday ? 'danger' : 'basic'}
        />
        {errors.birthday && <Text style={styles.errorText}>{errors.birthday}</Text>}

        <Button style={styles.saveButton} onPress={handleSave}>
          Save changes
        </Button>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    padding: width * 0.05,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
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
  closeIconImage: {
    width: 35,
    height: 35,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: height * 0.05,
    position: 'relative',
  },
  avatar: {
    width: width * 0.30,
    height: width * 0.30,
    borderRadius: (width * 0.30) / 2,
  },
  editIcon: {
    position: 'absolute',
    top: 5,
    right: 100,
    backgroundColor: '#6A00FF',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconImage: {
    width: 20,
    height: 20,
  },
  input: {
    marginBottom: height * 0.01,
    height: height * 0.08,
    color: '#2c3034',
  },
  saveButton: {
    marginTop: height * 0.03,
    backgroundColor: '#6d30ed',
    borderColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: height * 0.01,
  },
});

export default ProfileSettings;
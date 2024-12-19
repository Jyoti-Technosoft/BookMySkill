import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Avatar, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const ProfileSettings = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    birthday: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = await localStorage.getItem('userId');

      if (!userId) {
        navigation.replace('Login');
        return;
      }

      try {
        const response = await fetch(`http://10.0.2.2:5000/getUserProfile`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userId}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const user = data.user;

          setUserData({
            name: user.firstName,
            phone: user.phoneNumber,
            email: user.email,
            password: user.password,
            birthday: user.birthday || '',
          });
        } else {
          const errorData = await response.json();
          Alert.alert('Error', errorData.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      navigation.replace('Category');
    } else {
      setErrors(validationErrors);
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

  const validateForm = () => {
    let validationErrors = {};
    if (!userData.name.trim()) validationErrors.name = 'Name is required';
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(userData.phone)) validationErrors.phone = 'Invalid phone number';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(userData.email)) validationErrors.email = 'Invalid email address';
    if (userData.password.length < 6) validationErrors.password = 'Password too short';
    if (!userData.birthday.trim()) validationErrors.birthday = 'Birthday is required';

    return validationErrors;
  };

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
          <Avatar size="giant" source={require('../public/images/category-user.png')} style={styles.avatar} />
          <TouchableOpacity style={styles.editIcon}>
            {renderEditIcon()}
          </TouchableOpacity>
        </View>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={userData.name}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.name ? 'danger' : 'basic'}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Input
          label="Phone"
          placeholder="Enter your phone"
          value={userData.phone}
          onChangeText={(text) => setUserData({ ...userData, phone: text })}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.phone ? 'danger' : 'basic'}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <Input
          label="Email"
          placeholder="Enter your email"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.email ? 'danger' : 'basic'}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Input
          label="Password"
          placeholder="Enter your password"
          value={userData.password}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          secureTextEntry={true}
          accessoryRight={renderEyeIcon}
          style={styles.input}
          labelStyle={{ color: '#444957' }}
          status={errors.password ? 'danger' : 'basic'}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <Input
          label="Birthday"
          placeholder="Set Birthday"
          value={userData.birthday}
          onChangeText={(text) => setUserData({ ...userData, birthday: text })}
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
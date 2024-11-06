import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Layout, Text, Divider, Icon } from '@ui-kitten/components';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const handleNavigation = (tab) => {
        setActiveTab(tab);
    };

    const BottomNavBar = ({ navigation, activeTab }) => {
        return (
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItemContainer}>
              <Icon
                name='home-outline'
                style={styles.icon}
                fill={activeTab === 'Home' ? '#6A33F8' : 'gray'}
              />
              <Text style={[styles.navItem, activeTab === 'Home' && styles.activeNavItem]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tasks')} style={styles.navItemContainer}>
              <Icon
                name='clipboard-outline'
                style={styles.icon}
                fill={activeTab === 'Tasks' ? '#6A33F8' : 'gray'}
              />
              <Text style={[styles.navItem, activeTab === 'Tasks' && styles.activeNavItem]}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItemContainer}>
              <Icon
                name='person-outline'
                style={styles.icon}
                fill={activeTab === 'Profile' ? '#6A33F8' : 'gray'}
              />
              <Text style={[styles.navItem, activeTab === 'Profile' && styles.activeNavItem]}>Profile</Text>
            </TouchableOpacity>
          </View>
        );
      };

    return (
        <Layout style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <View style={styles.imagePlaceholder}>
                    <Image
                        source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.nameEditContainer}>
                    <View style={styles.infoContainer}>
                        <Text category='h5' style={styles.name}>James Harrid</Text>
                        <Text category='s1' style={styles.email}>jamesharid@yahoo.com</Text>
                    </View>
                    <TouchableOpacity appearance='outline' size="medium" style={styles.editButton}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                <Divider style={styles.divider} />

                <Text category='p1' style={styles.bio}>
                    Hey, I'm James, digital nomad, who loves slow travelling, new adventures, and supporting locals!
                </Text>
            </View>
            <Layout style={styles.container}>
                <View style={styles.menuContainer}>
                    <View style={styles.menuItem}>
                        <Image
                            source={require('../public/images/payment-icon.png')}
                            style={styles.leftImg}
                        />
                        <Text style={styles.menuText}>Payments</Text>
                        <Image
                            source={require('../public/images/arrow-icon.png')}
                            style={styles.rightImg}
                        />
                    </View>
                    <View style={styles.menuItem}>
                        <Image
                            source={require('../public/images/promos-icon.png')}
                            style={styles.leftImg}
                        />
                        <Text style={styles.menuText}>Your Promos</Text>
                        <Image
                            source={require('../public/images/arrow-icon.png')}
                            style={styles.rightImg}
                        />
                    </View>
                    <View style={styles.menuItem}>
                        <Image
                            source={require('../public/images/setting-circle-icon.png')}
                            style={styles.leftImg}
                        />
                        <Text style={styles.menuText}>Settings</Text>
                        <Image
                            source={require('../public/images/arrow-icon.png')}
                            style={styles.rightImg}
                        />
                    </View>
                    <View style={styles.menuItem}>
                        <Image
                            source={require('../public/images/support-icon.png')}
                            style={styles.leftImg}
                        />
                        <Text style={styles.menuText}>Support</Text>
                        <Image
                            source={require('../public/images/arrow-icon.png')}
                            style={styles.rightImg}
                        />
                    </View>
                </View>
            </Layout>
            <BottomNavBar navigation={{ navigate: handleNavigation }} activeTab={activeTab} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        paddingHorizontal: 20
    },
    profileContainer: {
        backgroundColor: '#fff',
        padding: 20
    },
    nameEditContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    imagePlaceholder: {
        borderRadius: 35,
        // backgroundColor: '#E4E9F2',
        marginRight: 15,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
    },
    email: {
        color: '#8F9BB3',
        marginBottom: 5,
    },
    editButton: {
        borderColor: '#000000',
        backgroundColor: '#fff',
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingvertical: 6,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
        textAlign: 'center',
    },
    bio: {
        textAlign: 'left',
        color: '#5d6270',
        marginVertical: 10,
        fontSize: 16,
    },
    divider: {
        backgroundColor: '#E4E9F2',
        height: 1,
        marginVertical: 5,
    },
    menuContainer: {
        flex: 1,
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 10,
        padding: 10
    },
    leftImg: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    rightImg: {
        width: 20,
        height: 20,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2',
    },
    navItemContainer: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 4,
    },
    navItem: {
        fontSize: 14,
        color: 'gray',
    },
    activeNavItem: {
        color: '#6A33F8',
    },
});

export default Profile;
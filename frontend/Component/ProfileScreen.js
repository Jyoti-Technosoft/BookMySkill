import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Layout, Text, Button, Divider, ListItem } from '@ui-kitten/components';

const ProfileScreen = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    //   const renderIcon = (props) => (
    //     <Icon {...props} fill="#9F8BFD" style={{ width: 28, height: 28 }} name="arrow-ios-forward-outline" />
    //   );

    //   const renderPaymentIcon = (props) => (
    //     <Icon {...props} fill="#9F8BFD" style={{ width: 28, height: 28 }} name="credit-card-outline" />
    //   );

    //   const renderPromoIcon = (props) => (
    //     <Icon {...props} fill="#9F8BFD" style={{ width: 28, height: 28 }} name="gift-outline" />
    //   );

    //   const renderSettingsIcon = (props) => (
    //     <Icon {...props} fill="#9F8BFD" style={{ width: 28, height: 28 }} name="settings-outline" />
    //   );

    //   const renderSupportIcon = (props) => (
    //     <Icon {...props} fill="#9F8BFD" style={{ width: 28, height: 28 }} name="question-mark-circle-outline" />
    //   );

    const handleNavigation = (tab) => {
        setActiveTab(tab);
    };

    const BottomNavBar = ({ navigation, activeTab }) => {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItemContainer}>
                    <Image
                        source={require('../public/images/home-simple-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={[styles.navItem, activeTab === 'Home' && styles.activeNavItem]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tasks')} style={styles.navItemContainer}>
                    <Image
                        source={require('../public/images/tasks-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={[styles.navItem, activeTab === 'Tasks' && styles.activeNavItem]}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItemContainer}>
                    <Image
                        source={require('../public/images/profile-active-icon.png')}
                        style={styles.icon}
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
                    <Button appearance='outline' size="medium" style={styles.editButton}>Edit Profile</Button>
                </View>

                <Divider style={styles.divider} />

                <Text category='p1' style={styles.bio}>
                    Hey, I'm James, digital nomad, who loves slow travelling, new adventures, and supporting locals!
                </Text>
            </View>
            <Layout style={styles.container}>
                <View style={styles.menuContainer}>
                    <ListItem
                        title='Payments'
                        // accessoryLeft={renderPaymentIcon}
                        // accessoryRight={renderIcon}
                        style={styles.menuItem}
                    />
                    <ListItem
                        title='Your Promos'
                        // accessoryLeft={renderPromoIcon}
                        // accessoryRight={renderIcon}
                        style={styles.menuItem}
                    />
                    <ListItem
                        title='Settings'
                        // accessoryLeft={renderSettingsIcon}
                        // accessoryRight={renderIcon}
                        style={styles.menuItem}
                    />
                    <ListItem
                        title='Support'
                        // accessoryLeft={renderSupportIcon}
                        // accessoryRight={renderIcon}
                        style={styles.menuItem}
                    />
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
        padding: 20
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
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        height: 45,
        color: '#000000'
    },
    bio: {
        textAlign: 'left',
        color: '#5d6270',
        marginVertical: 10,
        fontSize: 16,
        // paddingHorizontal: 10,
    },
    divider: {
        backgroundColor: '#E4E9F2',
        height: 1,
        marginVertical: 5,
    },
    menuContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        paddingVertical: 5,
    },
    menuItem: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        marginBottom: 10,
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
        width: 20,
        height: 20,
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

export default ProfileScreen;

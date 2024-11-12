import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';

const BottomNavBar = ({ navigation, activeTab, setActiveTab }) => {

    const handleNavigation = (tab) => {
        setActiveTab(tab);
        if (navigation.isReady()) {
            navigation.navigate(tab);
        }
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                onPress={() => handleNavigation('Category')}
                style={styles.navItemContainer}
            >
                <Icon
                    name="home-outline"
                    style={styles.icon}
                    fill={activeTab === 'Category' ? '#6A33F8' : 'gray'}
                />
                <Text style={[styles.navItem, activeTab === 'Category' && styles.activeNavItem]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleNavigation('TaskCompleted')}
                style={styles.navItemContainer}
            >
                <Icon
                    name="clipboard-outline"
                    style={styles.icon}
                    fill={activeTab === 'TaskCompleted' ? '#6A33F8' : 'gray'}
                />
                <Text style={[styles.navItem, activeTab === 'TaskCompleted' && styles.activeNavItem]}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleNavigation('Profile')}
                style={styles.navItemContainer}
            >
                <Icon
                    name="person-outline"
                    style={styles.icon}
                    fill={activeTab === 'Profile' ? '#6A33F8' : 'gray'}
                />
                <Text style={[styles.navItem, activeTab === 'Profile' && styles.activeNavItem]}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    },
    navItem: {
        fontSize: 16,
        color: 'gray',
    },
    activeNavItem: {
        color: '#6A33F8',
    },
});
export default BottomNavBar
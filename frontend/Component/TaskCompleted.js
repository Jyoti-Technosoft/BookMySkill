import React, { useEffect, useState } from 'react';
import { Layout, Text, Card, Button, Divider, Icon, Tab, TabView } from '@ui-kitten/components';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TaskCompleted = () => {
    const [activeTab, setActiveTab] = useState('Tasks');
    const [selectedIndex, setSelectedIndex] = useState(1);

    useEffect(() => {
        setSelectedIndex(1);
    }, []);

    const tasks = [
        {
            title: 'Surf teacher',
            name: 'Ashley Hidayat',
            date: 'Friday, February 8, 2024',
            time: '09:50 AM - 11:00 AM',
            buttonText: 'Rate',
            imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        },
        {
            title: 'Box trainer',
            name: 'David Wijaya',
            date: 'Tuesday, January 21, 2023',
            time: '14:00 PM - 16:00 PM',
            buttonText: 'Book Again',
            imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        },
        {
            title: 'Massage therapist',
            name: 'Sarah Suryadi',
            date: 'Thursday, November 12, 2022',
            time: '13:00 PM - 15:00 PM',
            buttonText: 'Book Again',
            imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
        },
    ];

    const handleNavigation = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        setSelectedIndex(1);
    }, []);

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
                        source={require('../public/images/task-active-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={[styles.navItem, activeTab === 'Tasks' && styles.activeNavItem]}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItemContainer}>
                    <Image
                        source={require('../public/images/profile-icon.png')}
                        style={styles.icon}
                    />
                    <Text style={[styles.navItem, activeTab === 'Profile' && styles.activeNavItem]}>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Layout style={styles.container}>
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                style={styles.tabView}
            >
                <Tab title="Scheduled" style={styles.selectedTab}>
                        <Text>Releasing Soon!</Text>
                </Tab>
                <Tab title="Completed" style={styles.selectedTab}>
                    <ScrollView contentContainerStyle={styles.content}>
                        {tasks.map((task, index) => (
                            <Card key={index} style={styles.card}>
                                <Text category="h6" style={styles.title}>{task.title}</Text>
                                <View style={styles.header}>
                                    <Image source={{ uri: task.imageUrl }} style={styles.avatar} />
                                    <View style={styles.headerText}>
                                        <Text style={styles.name}>{task.name}</Text>
                                        <Image
                                            source={require("../public/images/star-rating-4.5.png")}
                                            style={styles.ratingImage}
                                        />
                                    </View>
                                    {/* <Button appearance="ghost"
                                //   accessoryLeft={MessageIcon} 
                                style={styles.chatButton} /> */}
                                    <Image
                                        source={require("../public/images/chat-icon.png")}
                                        style={styles.chatImage}
                                    />
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.info}>
                                    <View style={styles.row}>
                                        {/* <CalendarIcon style={styles.icon} /> */}
                                        <Image
                                            source={require("../public/images/calendar-icon.png")}
                                            style={styles.calenderImage}
                                        />
                                        <Text>{task.date}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        {/* <ClockIcon style={styles.icon} /> */}
                                        <Image
                                            source={require("../public/images/clock-icon.png")}
                                            style={styles.clockImage}
                                        />
                                        <Text>{task.time}</Text>
                                    </View>
                                </View>
                                {/* <Button style={styles.button}>{task.buttonText}</Button> */}
                                <TouchableOpacity
                                    style={task.buttonText === 'Rate' ? styles.rateButton : styles.bookAgainButton}
                                >
                                    <Text style={task.buttonText === 'Rate' ? styles.buttonTextRate : styles.buttonTextBookAgain}>
                                        {task.buttonText}
                                    </Text>
                                </TouchableOpacity>
                            </Card>
                        ))}
                    </ScrollView>
                </Tab>
            </TabView>
            <BottomNavBar navigation={{ navigate: handleNavigation }} activeTab={activeTab} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    tabView: {
        flex: 1,
    },
    content: {
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    card: {
        marginVertical: 8,
        padding: 6,
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    headerText: {
        flex: 1,
    },
    chatButton: {
        paddingHorizontal: 0,
    },
    divider: {
        marginVertical: 12,
    },
    info: {
        marginVertical: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    button: {
        marginTop: 10,
        borderRadius: 24,
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
    ratingImage: {
        width: 100,
        height: 15,
        marginTop: 5,
    },
    calenderImage: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    clockImage: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    chatImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    title: {
        marginBottom: 10,
    },
    name: {
        color: '#18191e'
    },
    rateButton: {
        backgroundColor: '#6d30ed',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    bookAgainButton: {
        backgroundColor: '#f5f1ff',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    buttonTextRate: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    buttonTextBookAgain: {
        color: '#6d30ed',
        textAlign: 'center',
    },
    selectedTab: {
        marginTop: 20,
        marginBottom: 10,
    },
});

export default TaskCompleted;
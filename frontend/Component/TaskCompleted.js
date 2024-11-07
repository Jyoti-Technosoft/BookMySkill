import React, { useEffect, useState } from 'react';
import { Layout, Text, Card, Button, Divider, Icon, Tab, TabView } from '@ui-kitten/components';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import db from "../db.json";

const TaskCompleted = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Tasks');
    const [selectedIndex, setSelectedIndex] = useState(1);

    useEffect(() => {
        setSelectedIndex(1);
    }, []);

    const tasks = db?.TaskCompleted?.tasks || [];

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
                                        <Icon
                                            name="calendar"
                                            style={styles.calenderImage}
                                            fill="#bdbfca"
                                        />
                                        <Text>{task.date}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Icon
                                            name="clock-outline"
                                            style={styles.clockImage}
                                            fill="#bdbfca"
                                        />
                                        <Text>{task.time}</Text>
                                    </View>
                                </View>
                                {/* <Button style={styles.button}>{task.buttonText}</Button> */}
                                <TouchableOpacity
                                onPress={() => navigation.navigate('TaskerRating')}
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
        width: 24,
        height: 24,
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
        width: 25,
        height: 25,
        marginRight: 10,
    },
    clockImage: {
        width: 25,
        height: 25,
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
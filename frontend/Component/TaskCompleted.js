import React, { useEffect, useState } from 'react';
import { Layout, Text, Card, Divider, Icon, Tab, TabView } from '@ui-kitten/components';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import db from "../db.json";

const TaskCompleted = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const tasks = db?.TaskCompleted?.tasks || [];

    const renderTabContent = () => {
        return (
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
        )
    }

    useEffect(() => {
        setSelectedIndex(1);
    }, []);

    return (
        <Layout style={styles.container}>
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                style={styles.tabView}
                indicatorStyle={{ backgroundColor: '#6A33F8', borderBottomWidth: 0 }}
            >
                <Tab
                    title={() => (
                        <Text style={[
                            styles.tabStyle,
                            selectedIndex === 0 && styles.activeTab,
                        ]}
                        >
                            Scheduled
                        </Text>
                    )} >
                    {renderTabContent()}
                </Tab>
                <Tab title={() => (
                    <Text style={[
                        styles.tabStyle,
                        selectedIndex === 1 && styles.activeTab,
                    ]}>
                        Completed
                    </Text>
                )}>
                    {renderTabContent()}
                </Tab>
            </TabView>
            {/* <BottomNavBar navigation={navigation}  activeTab={activeTab} setActiveTab={setActiveTab} /> */}
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
    activeTab: {
        color: '#6A33F8',
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
    tabStyle: {
        marginTop: 20,
        marginBottom: 8,
        fontWeight: "bold",
        color: 'gray',
    },
});

export default TaskCompleted;
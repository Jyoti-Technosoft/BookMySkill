import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Layout, Card, Icon, Tab, TabView } from '@ui-kitten/components';

import db from "../db.json";

const TaskDetails = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const waitinlines = db?.reviewconfirm?.waitinline || [];
    const [message, setMessage] = useState('');
    const messages = db?.TaskDetails?.messages

    const BottomBar = () => {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.newTaskerButton}
                    // appearance="outline"
                    // status="primary"
                    onPress={() => alert('Find a New Tasker')}
                >
                    <Text style={styles.newTaskerText}>Find a New Tasker</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelTaskButton}
                    // appearance="outline"
                    // status="danger"
                    onPress={() => alert('Cancel Task')}
                >
                    <Text style={styles.cancelTaskText}>Cancel Task</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const TopBar = () => {
        return (
            <View style={styles.topBar}>
                <View style={styles.topTitle}>
                    <Icon
                        name="arrow-back"
                        style={styles.imageTobar}
                        onPress={() => navigation.goBack()}
                    />
                    <Text category="h5" style={styles.header}>Task Details</Text>
                </View>
                <Icon
                    name="more-vertical"
                    style={styles.imageTobar}
                />
            </View>
        );
    };

    const getImageSource = (imageName) => {
        switch (imageName) {
            case "../public/images/waitline-profile.png":
                return require('../public/images/waitline-profile.png');
            default:
                return null;
        }
    };

    return (
        <>
            <TopBar />
            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                style={styles.tabView}
            >
                <Tab
                    title="Task Info"
                    style={[
                        styles.tabStyle,
                        selectedIndex === 0 ? styles.activeTab : null,
                    ]}
                >
                    <Layout style={styles.container}>
                        {waitinlines?.map((item, index) => (
                            <Card key={index} style={styles.card}>
                                <View style={styles.row}>
                                    <Image
                                        style={styles.profileIcon}
                                        source={getImageSource(item?.profileImage)}
                                    />
                                    <Text style={styles.usernameText} category="s1">{item?.name}</Text>
                                </View>
                                <View>
                                    <View style={styles.childRow}>
                                        <Icon
                                            name="calendar"
                                            style={styles.waitCommanImg}
                                            fill="#bdbfca"
                                        />
                                        <Text style={styles.waitCommanText}>{item?.date}</Text>
                                    </View>
                                    <View style={styles.childRow}>
                                        <Icon
                                            name="clock-outline"
                                            style={styles.waitCommanImg}
                                            fill="#bdbfca"
                                        />
                                        <Text style={styles.waitCommanText}>{item?.time}</Text>
                                    </View>
                                    <View style={styles.childRow}>
                                        <Icon
                                            name="pin"
                                            style={styles.waitCommanImg}
                                            fill="#bdbfca"
                                        />
                                        <Text style={styles.waitCommanText}>{item?.location}</Text>
                                    </View>
                                </View>
                            </Card>
                        ))}

                        <Card style={styles.priceCard}>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceTitleText}>Hourly rate</Text>
                                <Text style={styles.priceValueText}>$25/hr</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceTitleText}>Total hours</Text>
                                <Text style={styles.priceValueText}>2.0 hr</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceTitleText}>Promos</Text>
                                <Text style={styles.priceValueText}>-$2</Text>
                            </View>
                            <View style={styles.totalRow}>
                                <View style={[styles.childRow, { marginLeft: 0 }]}>
                                    <Image
                                        style={styles.waitCommanImg}
                                        source={require('../public/images/total-icon.png')}
                                    />
                                    <Text style={[styles.waitCommanText, { marginLeft: 3 }]}> TOTAL</Text>
                                </View>
                                <Text style={styles.totalValue} category="h5">$48.00/hr</Text>
                            </View>
                        </Card>
                        <BottomBar />
                    </Layout>
                </Tab>

                <Tab
                    title="Chat"
                    style={[
                        styles.tabStyle,
                        selectedIndex === 1 ? styles.activeTab : null,
                    ]}
                >
                    <Layout style={{ backgroundColor: '#F7F9FC' }}>
                        <ScrollView style={styles.chatContainer}>
                            {messages.map((msg) => (
                                <View key={msg.id} style={[styles.messageContainer, msg.sender === 'You' ? styles.userMessage : styles.otherMessage]}>
                                    {msg.sender !== 'You' && (
                                        <Image
                                            source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }}
                                            style={styles.avatar}
                                        />
                                    )}
                                    <View style={{ marginLeft: msg.sender !== 'You' ? 50 : 0 }}>
                                        <View style={[styles.nameTime, msg.sender === 'You' && styles.reversedNameTime]}>
                                            {msg.sender === 'You' ? (
                                                <>
                                                    <Text style={styles.timestamp}>{msg.time}</Text>
                                                    <Text style={styles.sender}>{msg.sender}</Text>
                                                </>
                                            ) : (
                                                <>
                                                    <Text style={styles.sender}>{msg.sender}</Text>
                                                    <Text style={styles.timestamp}>{msg.time}</Text>
                                                </>
                                            )}
                                        </View>
                                        <View style={[styles.messageBubble, msg.sender === 'You' ? styles.userBubble : styles.otherBubble]}>
                                            <Text style={styles.messageText}>{msg.text}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.chatBottomBar}>
                            <View style={styles.quickReplyContainer}>
                                <TouchableOpacity style={styles.quickReplyButton}>
                                    <Text style={styles.quickReplyText}>Thanks!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.quickReplyButton}>
                                    <Text style={styles.quickReplyText}>Thank you!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.quickReplyButton}>
                                    <Text style={styles.quickReplyText}>See you soon!</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputContainer}>
                                <TouchableOpacity style={styles.sendButton}>
                                    <Image source={require('../public/images/plus-icon.png')} style={styles.sendIcon} />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Type a message..."
                                    value={message}
                                    onChangeText={setMessage}
                                />
                                <TouchableOpacity style={styles.sendButton}>
                                    <Image source={require('../public/images/send-icon.png')} style={styles.sendIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Layout>
                </Tab>
            </TabView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F7F9FC',
    },
    tabView: {
        backgroundColor: '#fff',
        height: '100%'
    },
    activeTab: {
        color: '#6d30ed',
    },
    card: {
        marginVertical: 6,
    },
    chatText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
        marginBottom: 4,
    },
    usernameText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#1e2126"
    },
    waitCommanText: {
        fontSize: 15,
        color: "#36373d",
        marginLeft: 9
    },
    childRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 9
    },
    waitCommanImg: {
        width: 25,
        height: 25,
    },
    profileIcon: {
        width: 45,
        height: 45,
        borderRadius: 24,
        marginRight: 10,
    },
    section: {
        marginVertical: 8,
    },
    priceCard: {
        marginTop: 6,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    priceTitleText: {
        color: "#46474c"
    },
    priceValueText: {
        color: "#393b40",
        fontWeight: "bold"
    },
    totalValue: {
        color: "#393b40",
        fontWeight: "bold",
        fontSize: 17
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2'
    },
    bottomBar: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F7F9FC',
    },
    chatBottomBar: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    newTaskerButton: {
        width: '100%',
        borderRadius: 20,
        borderColor: '#6d30ed',
        borderWidth: 1.2,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginTop: 170,
        marginBottom: 10,
    },
    newTaskerText: {
        color: '#6d30ed',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cancelTaskButton: {
        width: '100%',
        borderRadius: 20,
        borderColor: '#e1696e',
        borderWidth: 1.2,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    cancelTaskText: {
        color: '#e1696e',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 13,
        backgroundColor: '#fff',
    },
    imageTobar: {
        width: 25,
        height: 25
    },
    topTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#22242a',
        marginLeft: 20
    },
    chatContainer: {
        padding: 20,
    },
    messageContainer: {
        flexDirection: 'Column',
        marginBottom: 10
    },
    otherMessage: {
        justifyContent: 'flex-start',
    },
    userMessage: {
        justifyContent: 'flex-end',
        flexDirection: 'row-reverse',
    },
    avatar: {
        width: 46,
        height: 50,
        borderRadius: 25,
    },
    messageBubble: {
        maxWidth: '100%',
        padding: 10,
        borderRadius: 8,
    },
    otherBubble: {
        marginTop: 5,
        backgroundColor: '#fff',
    },
    userBubble: {
        marginTop: 5,
        backgroundColor: '#b1cbfe',
        padding: 10
    },
    messageText: {
        color: '#000000',
    },
    sender: {
        fontSize: 13,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
    quickReplyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    quickReplyButton: {
        borderColor: '#6D30ED',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    quickReplyText: {
        color: '#6D30ED',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E4E9F2',
        bottom: 0,
        width: '100%',
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E4E9F2',
        borderRadius: 20,
        marginRight: 10,
    },
    sendButton: {
        padding: 8,
    },
    sendIcon: {
        width: 40,
        height: 40,
    },
    infoText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
    nameTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default TaskDetails;
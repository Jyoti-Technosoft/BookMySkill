import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Layout, Button, Icon, Calendar } from '@ui-kitten/components';

const BookingDate = () => {

    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(1);
    const [activeTab, setActiveTab] = useState('Choose dates');

    const BottomBar = () => {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.clearAllButton}>
                    <Text style={styles.clearAllButtonText}>Clear all</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}>
                    {/* <Image style={styles.searchIcon} source={require('../public/images/serachicon-whiteimg.png')} /> */}
                    <Icon
                        name='search-outline'
                        style={styles.searchIcon}
                        fill="white"
                    />
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const CalendarIcon = (props) => {
        console.log('CalendarIcon===', props);
        return <Icon {...props} name='calendar' />;
    };

    const renderHeader = (headerProps) => {
        return (
            <View style={styles.weekDayContainer}>
                {headerProps?.weekDayNames?.map((day, index) => (
                    <Text key={index} style={styles.weekDayText}>
                        {day}
                    </Text>
                ))}
            </View>
        );
    };

    const increment = () => {
        setDays(days + 1);
    };

    const decrement = () => {
        if (days > 1) {
            setDays(days - 1);
        }
    };

    return (<View style={styles.container}>
        <View style={styles.headercloseicon}>
            <Icon
                name="close-outline"
                style={styles.closeIcon}
                fill="#9194a3"
                onPress={() => { }}
            />
        </View>
        <View style={styles.locationContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.cardText}>Location</Text>
                <TouchableOpacity
                    style={styles.anywhereButton}
                    onPress={() => {
                        // Handle add time action here
                    }}
                >
                    <Text style={styles.cardButtonText}>Anywhere</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Layout style={styles.card}>
            <View style={styles.headerContainer}>
                <Text category='h6' style={styles.headerText}>When</Text>
                <Layout style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === 'Choose dates' && styles.activeTab
                        ]}
                        onPress={() => setActiveTab('Choose dates')}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === 'Choose dates' && styles.activeTabText
                        ]}>
                            Choose dates
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === 'Anytime' && styles.activeTab
                        ]}
                        onPress={() => setActiveTab('Anytime')}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === 'Anytime' && styles.activeTabText
                        ]}>
                            Anytime
                        </Text>
                    </TouchableOpacity>
                </Layout>
            </View>
            <View>
                <Calendar
                    date={date}
                    onSelect={(nextDate) => setDate(nextDate)}
                    style={styles.calendar}
                    renderHeader={renderHeader}
                />
                <Layout style={[styles.bottomBarCalendar, { justifyContent: "center" }]}>
                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={decrement}
                    >
                        <Text style={styles.controlButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.daysText}>{`${days} days`}</Text>
                    <TouchableOpacity
                        style={styles.controlButton}
                        onPress={increment}
                    >
                        <Text style={styles.controlButtonText} >+</Text>
                    </TouchableOpacity>
                </Layout>
            </View>
            <Layout style={styles.bottomBarCalendar}>
                <Button appearance='ghost'> <Text style={styles.skipButton}>Skip</Text></Button>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={{ color: "#8653ed", fontWeight: "bold" }}>Next</Text></TouchableOpacity>
            </Layout>
        </Layout>
        <BottomBar />
    </View >)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headercloseicon: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 10,
        paddingTop: 3
    },
    closeIcon: {
        width: 25,
        height: 25,
    },
    locationContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 3,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 15,
        color: "#bfc1c7",
    },
    cardButtonText: {
        fontSize: 15,
        color: "#414348",
        fontWeight: "bold"
    },
    anywhereButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 5,
        marginTop: 15
    },
    headerContainer: {
        padding: 13
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#171a20",
        marginBottom: 10,
    },
    tabContainer: {
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#f3f4f6',
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#6d30ed',
    },
    tabText: {
        fontSize: 16,
        color: '#404450',
        fontWeight: "bold"
    },
    activeTabText: {
        color: '#ffffff',
        fontWeight: "bold"
    },
    calendar: {
        // height: 50,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        // borderColor: 'transparent',
    },
    weekDayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    weekDayText: {
        color: 'red',
        fontWeight: 'bold',
    },
    bottomBarCalendar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2',
        padding: 11
    },
    controlButton: {
        marginHorizontal: 10,
        borderRadius: 30,
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: "#e3e4e8",
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlButtonText: {
        color: "#9497a4",
        fontSize: 20,
        fontWeight: "bold"
    },
    daysText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#8F9BB3',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "#9497a2",
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 8
    },
    skipButton: {
        fontSize: 15,
        color: '#c1c3c9',
    },
    nextButton: {
        backgroundColor: '#f5f1ff',
        paddingHorizontal: 30,
        paddingVertical: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2',
    },
    clearAllButton: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    clearAllButtonText: {
        color: '#a4a6b0',
        fontSize: 15,
    },
    searchButton: {
        backgroundColor: '#6d30ed',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 1,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
    },
})
export default BookingDate 
import React, { useState } from 'react';
import { Icon, Layout, Calendar, Button, Divider } from '@ui-kitten/components';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import db from "../db.json";

const SearchVenues = ({ navigation }) => {
    const searchPlaces = db?.searchvenuepage?.searchPlaces || [];
    const [searchQuery, setSearchQuery] = useState('');
    const [showLocation, setShowLocation] = useState(true);
    const [showWhen, setShowWhen] = useState(true);
    const [showPeople, setShowPeople] = useState(true);
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(1);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [activeTab, setActiveTab] = useState('Choose dates');

    const handlePlaceSelection = (url) => {
        // console.log("Selected Place URL:", url);
        setShowLocation(true);
    };

    const getImageSource = (imageName) => {
        switch (imageName) {
            case "../public/images/searchvenues-img1.png":
                return require('../public/images/searchvenues-img1.png');
            case "../public/images/searchvenues-img2.png":
                return require('../public/images/searchvenues-img2.png');
            case "../public/images/searchvenues-img4.jpg":
                return require('../public/images/searchvenues-img4.jpg');
            default:
                return null;
        }
    };

    const BottomBar = ({ navigation }) => {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.clearAllButton}>
                    <Text style={styles.clearAllButtonText}>Clear all</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}
                 onPress={() => navigation.navigate('TaskerList')}>
                {/* onPress={() => navigation.navigate('TaskerProfile')}> */}
                    <Icon
                        name='search-outline'
                        style={styles.searchIconBottombar}
                        fill='white'
                    />
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        );
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

    const closeSearch = () => {
        setShowLocation(true);
        setShowWhen(true);
        setShowPeople(true);
        Keyboard.dismiss();
    };

    const increment = () => {
        setDays(days + 1);
    };

    const decrement = () => {
        if (days > 1) {
            setDays(days - 1);
        }
    };

    const incrementCounter = (setter, value) => {
        setter(value + 1);
      };
    
      const decrementCounter = (setter, value) => {
        if (value > 0) {
          setter(value - 1);
        }
      };


    return (
        <TouchableWithoutFeedback onPress={closeSearch}>
            <View style={styles.container}>
                <View style={styles.headercloseicon}>
                    <Icon
                        name="close-outline"
                        style={styles.closeIcon}
                        fill="#9194a3"
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
                    <View style={showLocation ? styles.timePeopleContainer : styles.card}>
                        {showLocation ? (
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>Location</Text>
                                <TouchableOpacity
                                    style={styles.addLocationButton}
                                    onPress={() => setShowLocation(false)}
                                >
                                    <Text style={styles.cardButtonText}>Anywhere</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <>
                                <Text style={styles.whereToTitle}>Where to?</Text>
                                <View style={styles.searchInputContainer}>
                                    <Icon
                                        name='search-outline'
                                        style={styles.searchIcon}
                                    />
                                    <TextInput
                                        style={styles.searchInput}
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChangeText={setSearchQuery}
                                    />
                                </View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageScrollView}>
                                    {searchPlaces?.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => handlePlaceSelection(item?.url)}>
                                            <View style={styles.placeContainer}>
                                                <Image style={styles.placeImage} source={getImageSource(item?.url)} />
                                                <Text style={
                                                    styles.placeText}>{item?.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </>
                        )}
                    </View>

                    <View style={showWhen ? styles.timePeopleContainer : styles.whenCard}>
                        {showWhen ? (
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>When</Text>
                                <TouchableOpacity
                                    style={styles.addTimeButton}
                                    onPress={() => setShowWhen(false)}
                                >
                                    <Text style={styles.cardButtonText}>Choose Date</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Layout>
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
                        )}
                    </View>

                    <View style={showPeople ? styles.timePeopleContainer : styles.peopleSection}>
                        {showPeople ? (
                            <View style={styles.cardContent}>
                                <Text style={styles.cardText}>People</Text>
                                <TouchableOpacity
                                    style={styles.addPeopleButton}
                                    onPress={() => setShowPeople(false) }
                                >
                                    <Text style={styles.cardButtonText}>Add People</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View>
                                <Text style={styles.peopleTitle} category="h6">
                                    How many people?
                                </Text>
                                <View style={styles.counterRow}>
                                    <Text category="s1" style={styles.counterLabel}>
                                        Adults
                                    </Text>
                                    <View style={styles.counter}>
                                        {/* <Image
                                  style={styles.counterButton}
                                  source={{
                                    uri: "https://static-00.iconduck.com/assets.00/minus-circle-icon-1024x1024-8ry1v1pb.png",
                                  }}
                                  onPress={() => decrement(setAdults, adults)}
                                /> */}
                                        <TouchableOpacity
                                            style={styles.counterButton}
                                            onPress={() => decrementCounter(setAdults, adults)}
                                        >
                                            <Icon
                                                name="minus"
                                                style={styles.counterIcon}
                                                fill="#222B45"
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{adults}</Text>
                                        <TouchableOpacity
                                            style={styles.counterButton}
                                            onPress={() => incrementCounter(setAdults, adults)}
                                        >
                                            <Icon
                                                name="plus"
                                                style={styles.counterIcon}
                                                fill="#222B45"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.counterRow}>
                                    <Text category="s1" style={styles.counterLabel}>
                                        Children
                                    </Text>
                                    <View style={styles.counter}>
                                        <TouchableOpacity
                                            style={styles.counterButton}
                                            onPress={() => decrementCounter(setChildren, children)}
                                        >
                                            <Icon
                                                name="minus"
                                                style={styles.counterIcon}
                                                fill="#222B45"
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{children}</Text>
                                        <TouchableOpacity
                                            style={styles.counterButton}
                                            onPress={() => incrementCounter(setChildren, children)}
                                        >
                                            <Icon
                                                name="plus"
                                                style={styles.counterIcon}
                                                fill="#222B45"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    </View>
                </ScrollView>
                <BottomBar navigation={navigation}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
    },
    scrollViewContainer: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 5,
        marginTop: 20,
        paddingVertical: 17,
        paddingHorizontal: 12,
    },
    whenCard: {
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
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
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
    peopleSection: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E4E9F2",
        paddingBottom: 15,
        backgroundColor: "#fff",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    peopleTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1A1D22",
        padding: 15,
    },
    counterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
      },
      counterLabel: {
        fontSize: 16,
        color: "#222B45",
        paddingLeft: 15,
        paddingRight: 15,
      },
      counter: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
      },
      countText: {
        marginHorizontal: 10,
        fontSize: 16,
        color: "#222B45",
      },
      counterButton: {
        borderRadius: 30,
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#adb1b7",
        borderWidth: 1,
        marginHorizontal: 5,
      },
      counterIcon: {
        width: 20,
        height: 20,
      },
    headercloseicon: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    closeIcon: {
        width: 25,
        height: 25,
    },
    whereToTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1d22',
        paddingHorizontal: 17,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#afb1bb",
        paddingHorizontal: 10,
        marginHorizontal: 17,
        marginVertical: 17,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        borderWidth: 0,
        padding: 8,
        fontSize: 16,
    },
    imageScrollView: {
        marginBottom: 10,
    },
    placeContainer: {
        width: 120,
        marginLeft: 17,
    },
    placeImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    placeText: {
        marginTop: 10,
        textAlign: 'left',
        fontWeight: "bold",
        color: "#3d4044",
    },
    bottomBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 15,
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
        paddingVertical: 12,
    },
    searchButton: {
        backgroundColor: '#6d30ed',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearAllButtonText: {
        color: '#a4a6b0',
        fontSize: 16,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    searchIconBottombar: {
        width: 20,
        height: 20,
        marginRight: 1,
    },
    timePeopleContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginTop: 20,
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
        fontSize: 18,
        color: "#bfc1c7",
    },
    cardButtonText: {
        fontSize: 18,
        color: "#414348",
        fontWeight: "bold"
    },
    addLocationButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTimeButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPeopleButton: {
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchVenues;
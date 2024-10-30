import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Text } from 'react-native';

import db from "../db.json";

const SearchVenues = () => {
    const searchPlaces = db?.searchvenuepage?.searchPlaces || [];
    const [searchQuery, setSearchQuery] = useState('');

    const handlePlaceSelection = (url) => {
        console.log("Selected Place URL:", url);
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

    const BottomBar = () => {
        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.clearAllButton}>
                    <Text style={styles.clearAllButtonText}>Clear all</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}>
                    <Image style={styles.searchIconBottombar} source={require('../public/images/serachicon-whiteimg.png')} />
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headercloseicon}>
                <Image style={styles.closeIcon} source={{ uri: 'https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png' }} />
            </View>
            <View style={styles.card}>
                <Text style={styles.whereToTitle}>Where to?</Text>
                <View style={styles.searchInputContainer}>
                    <Image style={styles.searchIcon} source={require('../public/images/searchvanueicon.png')} />
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
                                <Text style={styles.placeText}>{item?.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View >
                {/* Add Time Card */}
                <View style={styles.timePeopleContainer}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>When</Text>
                        <TouchableOpacity
                            style={styles.addTimeButton}
                            onPress={() => {
                                // Handle add time action here
                            }}
                        >
                            <Text style={styles.cardButtonText}>Add Time</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Add People Card */}
                <View style={styles.timePeopleContainer}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>People</Text>
                        <TouchableOpacity
                            style={styles.addPeopleButton}
                            onPress={() => {
                                // Handle add people action here
                            }}
                        >
                            <Text style={styles.cardButtonText}>Add People</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    headercloseicon: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
    },
    closeIcon: {
        width: 15,
        height: 15,
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
        width: 15,
        height: 15,
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

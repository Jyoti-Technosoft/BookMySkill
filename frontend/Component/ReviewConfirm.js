import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Layout, Card, Button, Input, Icon } from '@ui-kitten/components';

import db from "../db.json";

const ReviewConfirm = ({ navigation }) => {
    const waitinlines = db?.reviewconfirm?.waitinline || [];

    const BottomBar = ({ navigation }) => {
        return (
            <View style={styles.bottomBar}>
                <Button style={styles.confirmButton} onPress={() => navigation.navigate('PaymentPage')}>
                    Confirm
                </Button>
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
                    <Text category="h5" style={styles.header}>Review and Confirm</Text>
                </View>
                <Icon
                    name="share"
                    style={styles.imageTobar}
                    onPress={() => navigation.goBack()}
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
            <Layout style={styles.container}>
                {/* Wait in Line Section */}
                <Text category="label" style={styles.contentTitle}>Wait in Line</Text>
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

                {/* Payment Section */}
                <View style={styles.section}>
                    <Text style={styles.contentTitle} category="label">Payment</Text>
                    <Button appearance="outline" status="primary" style={styles.paymentButton}>
                        <Text style={styles.paymentText}>Credit Card</Text>
                    </Button>
                </View>

                {/* Promos Section */}
                <View style={[styles.section, { marginBottom: 15 }]}>
                    <Text style={styles.contentTitle} category="label">Promos</Text>
                    <Input
                        style={styles.promoInput}
                        placeholder="#Newmember"
                    />
                </View>

                {/* Price Details Section */}
                <Text style={styles.contentTitle} category="label">Price Details</Text>
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
            </Layout>
            <BottomBar navigation={navigation}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F7F9FC',
    },
    card: {
        marginVertical: 6,
        backgroundColor: '#fff'
    },
    contentTitle: {
        color: "#1d1f24",
        fontSize: 18,
        fontWeight: "bold"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 4,
        borderBottomColor: '#e4e9f2'
    },
    usernameText: {
        fontWeight: "bold",
        fontSize: 16,
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
    paymentButton: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paymentText: {
        marginLeft: 8,
    },
    promoInput: {
        marginTop: 8,
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
    totalText: {
        color: "#46474c"
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
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 16,
        paddingVertical: 13,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e4e9f2'
    },
    confirmButton: {
        width: '100%',
        borderRadius: 50,
        backgroundColor: '#6d30ed',
        borderColor: 'transparent',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 13,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e4e9f2',
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
});

export default ReviewConfirm;

import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Layout, Text, Divider, Button, Icon } from '@ui-kitten/components';
const PaymentPage = () => {
    return (
        <Layout style={styles.container}>
            {/* <View style={styles.imageContainer}>
        <Image
          source={require('./path/to/your-image.png')}
          style={styles.successImage}
        />
      </View> */}
            <Text category="h5" style={styles.successText}>Payment success!</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text category="s1">Ref number</Text>
                    <Text category="s1" style={styles.valueText}>00000072697027</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text category="s1">Date</Text>
                    <Text category="s1" style={styles.valueText}>03-02-2024</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text category="s1">Time</Text>
                    <Text category="s1" style={styles.valueText}>05:40 AM</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text category="s1">Payment method</Text>
                    <Text category="s1" style={styles.valueText}>Credit card</Text>
                </View>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.amountContainer}>
                <Text category="s1">Amount</Text>
                <Text category="h6" style={styles.amountText}>$48</Text>
            </View>
            <TouchableOpacity style={styles.receiptButton}>
                {/* <Icon name="file-text-outline" fill="#8F9BB3" style={styles.buttonIcon} /> */}
                <Text style={styles.receiptButtonText}>Get PDF receipt</Text>
            </TouchableOpacity>
            <Button style={styles.viewBookingButton}>View booking</Button>
        </Layout>
    );
};
const styles = {
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    successImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    successText: {
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        width: '100%',
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    valueText: {
        fontWeight: 'bold',
        textAlign: 'right',
    },
    divider: {
        width: '100%',
        marginVertical: 20,
    },
    amountContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    amountText: {
        fontWeight: 'bold',
        color: '#222B45',
    },
    receiptButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#8F9BB3',
        marginBottom: 20,
    },
    buttonIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    receiptButtonText: {
        color: '#8F9BB3',
        fontWeight: 'bold',
    },
    viewBookingButton: {
        width: '100%',
        backgroundColor: '#6D30ED',
        borderWidth: 0,
        borderRadius: 10,
    },
};
export default PaymentPage;
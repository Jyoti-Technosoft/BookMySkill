import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Registration');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.flower}>
                <Image source={require('../public/images/logo192.png')} style={styles.image} />
            </View>
            <Text style={styles.text}>yay</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    flower: {
        position: 'relative',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default SplashScreen;
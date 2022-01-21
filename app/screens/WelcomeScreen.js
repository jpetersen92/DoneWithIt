import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppText>Sell What You Don't Need</AppText>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 100,
        height: 100,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
})

export default WelcomeScreen;
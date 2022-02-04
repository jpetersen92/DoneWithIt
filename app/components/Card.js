import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image uri={imageUrl} tint='light' preview={{uri: thumbnailUrl}} style={styles.image}/>
                <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
        );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: 'hidden',
        marginVertical: 10
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    }
})

export default Card;
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {

    const listing = route.params

    return (
        <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            
            <Image uri={listing.images[0].url} tint='light' preview={{uri: listing.images[0].thumbnailUrl}} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/josh.png')}
                        title='Josh Petersen'
                        subTitle='5 Listings'
                        />
                </View>
                <ContactSellerForm  />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    }
})

export default ListingDetailsScreen;
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {

    const { request: loadListings, data: listings, error, loading } = useApi(listingsApi.getListings);

    
    useEffect(() => {
        loadListings();
    }, []);
    

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title='Retry' onPress={loadListings}/>
                </>}
                <FlatList 
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => 
                    <Card 
                        title={item.title}
                        subTitle={'$' + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;
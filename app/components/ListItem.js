import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppText from './AppText';
import defaultStyles from "../config/styles";

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={defaultStyles.colors.light}
                onPress={onPress}
                >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' size={20} color={defaultStyles.colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: defaultStyles.colors.white,
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: defaultStyles.colors.medium
    },
    title: {
        fontWeight: '500',
    }
})

export default ListItem;
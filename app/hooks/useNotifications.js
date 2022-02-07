import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications()

        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            // if (!permission.granted) return;

            const permission = await Notifications.requestPermissionsAsync();
            if (!permission.granted) return;
    
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token)
            expoPushTokensApi.register(token)
        } catch (error) {
            console.log('Error getting a push token', error)
        }
    }
}
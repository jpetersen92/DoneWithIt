import React, { useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AppLoading from 'expo-app-loading'


import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import authStorage from './app/auth/storage';


export default function App() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if(!token) return;
    setUser(jwtDecode(token))
  }

  // useEffect(() => {restoreToken}, [])

  if (!isReady)
    return (<AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} onError={console.warn}/>);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

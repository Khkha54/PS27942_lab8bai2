import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigate from './MainNavigate';
import UserNavigate from './UserNavigate';

const useAppSelector=useSelector;
const AppNavigate = () => {
    const appState=useAppSelector((state)=>state.App)
  return (
    <NavigationContainer>
        {
            appState.user ? <MainNavigate/> : <UserNavigate/>
        }
    </NavigationContainer>
  )
}

export default AppNavigate
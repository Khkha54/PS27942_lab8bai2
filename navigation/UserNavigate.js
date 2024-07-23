import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dang_Nhap from '../assignment/Dang_Nhap';
import Dang_Ky from '../assignment/Dang_Ky';
import { useDispatch, useSelector } from 'react-redux'

const Stack=createNativeStackNavigator();
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const UserNavigate = () => {

  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.App);

  return (
    <Stack.Navigator initialRouteName={appState.initialRouterNameUser} >
        <Stack.Screen name='Login' component={Dang_Nhap} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={Dang_Ky} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default UserNavigate
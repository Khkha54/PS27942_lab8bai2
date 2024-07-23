import { View, Text, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trang_Chu from '../assignment/Trang_Chu';
import Tim_Kiem from '../assignment/Tim_Kiem';
import San_Pham_Detail from '../assignment/San_Pham_Detail';
import Gio_Hang from '../assignment/Gio_Hang';
import Thong_Tin from '../assignment/Thong_Tin';
import Lich_Su from '../assignment/Lich_Su';
import DoiThongTin_User from '../assignment/DoiThongTin_User';

const Stack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();

const MainTab = () => {
  return (
    <BottomStack.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let icon;
        switch (route.name) {
          case 'Home':
            icon = <Image source={require('../image/home.png')} style={{ width: size, height: "80%" }} />
            break;
          case 'Search':
            icon = <Image source={require('../image/search.png')} style={{ width: size, height: "80%" }} />
            break;
          case 'User':
            icon = <Image source={require('../image/user.png')} style={{ width: size, height: "80%" }} />
            break;
            case 'Cart':
            icon = <Image source={require('../image/cart.png')} style={{ width: size, height: "80%" }} />
            break;
          default:
            break;
        }
        return icon
      },
      tabBarLabel: ({ focused }) => {
        if(focused){
          return <Text style={{color:"black",fontSize:15}}>{route.name}</Text>
        }
        return <Text>{route.name}</Text>
      },
      tabBarStyle: {
        height: 60,
        paddingBottom: 10,
        marginTop:20
      }
    })}>
      <BottomStack.Screen name='Home' component={Trang_Chu} />
      <BottomStack.Screen name='Search' component={Tim_Kiem} />
      <BottomStack.Screen name='User' component={Thong_Tin} />
      <Stack.Screen name='Cart' component={Gio_Hang} />

    </BottomStack.Navigator>
  )
}
const MainNavigate = () => {
  return (
    <Stack.Navigator initialRouteName='MainTab' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainTab' component={MainTab} />
      <Stack.Screen name='Detail' component={San_Pham_Detail} options={{headerShown:true}} />
      <Stack.Screen name='History' component={Lich_Su} />
      <Stack.Screen name='EditUser' component={DoiThongTin_User} />
    </Stack.Navigator>
  )
}

export default MainNavigate
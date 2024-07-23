// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Tab_Navigate = (props) => {
//   const {state,description,navigation}=props
//   return (
//     <View
//      style={{
//         width:"85%",
//         height:45,
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"space-evenly",
//         backgroundColor:"white",
//         position:"absolute",
//         bottom:0}}>
//       <Image style={styles.img} source={require('../../image/home.png')}/>
//       <Image style={styles.img} source={require('../../image/search.png')}/>
//       <Image style={styles.img} source={require('../../image/bell.png')}/>
//       <Image style={styles.img} source={require('../../image/user.png')}/>
//     </View>
//   )
// }

// export default Tab_Navigate

// const styles = StyleSheet.create({
//     img:{
//         height:30,
//         width:30
//     }
// })
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trang_Chu from '../Trang_Chu';
import San_Pham_Detail from '../San_Pham_Detail';
const BottomStack = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
  const icon = [
    {
      "Trang_Chu": require('../../image/home.png')
    },
    {
      "Tim_Kiem": require('../../image/home.png')
    }
  ];
  const geticon = (key) => {
    switch (key) {
      case "Trang_Chu":
        return require('../../image/home.png');
      case "Tim_Kiem":
        return require('../../image/home.png');
      case "Thong_Bao":
        return require('../../image/home.png');
      case "Nguoi_Dung":
        return require('../../image/home.png');
      default:
        break;
    }
  }
  /**
   * 
   */
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Image source={geticon(route.name)} width={16} />

            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTab = () => {
  return (
    <BottomStack.Navigator initialRouteName='Trang_Chu' tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown:false}}
    >
      <BottomStack.Screen name='Trang_Chu' component={Trang_Chu} />
    </BottomStack.Navigator>
  )
}

export default BottomTab
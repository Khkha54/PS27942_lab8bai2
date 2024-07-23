import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ListM_Item from './ListM_Item';
import Animated from 'react-native-reanimated';
const Flat_TrangChu = (props) => {
    const { name, data, refreshing, getProducts, onScroll } = props;
    const { navigation } = props;
    return (
        <View style={{}}>
            <Text style={[styles.txtBody]}>Cây trồng</Text>
            <Animated.FlatList
                style={{ marginBottom: 0, minHeight: 0, marginTop: 0 }}
                data={data}
                renderItem={({ item }) => <TouchableOpacity
                    style={{ width: "45%", marginHorizontal: 10 }}
                    onPress={() => navigation.navigate('Detail', { id: item._id })} >
                    <ListM_Item item={item} />
                </TouchableOpacity>}
                keyExtractor={(item) => item._id}
                numColumns={2}
                nestedScrollEnabled={true}
                refreshing={refreshing}
                onRefresh={getProducts}
                onScroll={onScroll}
            >
            </Animated.FlatList>

        </View>
    )
}

export default Flat_TrangChu

const styles = StyleSheet.create({
    txtBody: {
        fontFamily: "Poppins-Regular",
        fontSize: 25,
        color: "black",
        alignSelf: "baseline",
        marginTop: 0,
        marginStart: "5%",
        paddingTop: 25
    }
})
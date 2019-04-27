import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'

import ListItem from './ListItem'

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
});


const cityList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.cityList}
            renderItem={({item}) => {
                return (
                <ListItem
                    placeName={item.value}
                    itemListClickHandler={() => props.itemListClickHandler(item.key)}
                />
            )}}
        />
    )
}

export default cityList

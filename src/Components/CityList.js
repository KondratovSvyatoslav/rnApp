import React from 'react'
import {Text,View, StyleSheet} from 'react-native'

import ListItem from './ListItem'

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
});

const cityList = props => {
    const listOfCities = props.cityList.map((city,i) =>
        <ListItem key={i} placeName={city}/>
    )
    return (<View style={styles.listContainer}>{listOfCities}</View>)
}

export default cityList

import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    input: {
        flex: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20
    }
})

const inputField = props => (
    <TextInput onChangeText={props.onChangeTextHandler} value={props.city} style={styles.input} placeholder='Dummy text'/>
)

export default inputField

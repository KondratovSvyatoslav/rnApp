import React, {useState} from 'react'
import {View ,TextInput, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    input: {
        flex: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
        textAlign: 'center',
        height: '100%'
    },

    button: {
        flex: 1,
    },
    container: {
        width: "100%",
        marginTop: 60,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 35
    }
})

const inputField = ({buttonClickHandler}) => {
    const [state, setState] = useState({currentCity: ''});

    const onChangeTextHandler = value => {
        setState({currentCity: value})
    };

    return (
        <View style={styles.container}>
            <TextInput onChangeText={onChangeTextHandler} value={state.currentCity} style={styles.input}
                       placeholder='Dummy text'/>
            < Button title={'Add'} style={styles.button} onPress={buttonClickHandler.bind(this, state.currentCity)}/>
        </View>
    )
}

export default inputField

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import InputFieldComponent from './src/Components/InputFieldComponent'
import CityList from './src/Components/CityList'

export default class App extends Component {
    constructor() {
        super()
        this.state = {cities: []}
    }

    buttonClickHandler(value) {
        this.setState(prevState => {
            return {
                cities: prevState.cities.concat(value)
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <InputFieldComponent buttonClickHandler={this.buttonClickHandler.bind(this)}/>
                <CityList cityList={this.state.cities}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

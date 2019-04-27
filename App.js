import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import InputFieldComponent from './src/Components/InputFieldComponent'
import CityList from './src/Components/CityList'
import DetailsPage from './src/Components/DetailsPage'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            selected: null
        }
    }

    buttonClickHandler(value) {
        this.setState(prevState => {
            return {
                cities: prevState.cities.concat({
                    value: value,
                    key: '' + Math.random(),
                    image: {
                        uri: 'https://images.spot.im/v1/production/am8uunwlgu48aqmiualn'
                    }
                })
            }
        })
    }

    removeListItemHandler() {
        this.setState(prevState => {
            return {
                cities: prevState.cities.filter(city => {
                    return city.key !== prevState.selected.key
                }),
                selected: null
            }
        })
    }

    clickOnListItemHandler(key) {
        this.setState(prevState => {
            return {
                selected: prevState.cities.find(city => city.key === key)
            }
        })
    }

    closeListItemHandler() {
        this.setState({selected: null})
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailsPage selected={this.state.selected}
                             closeListItemHandler={this.closeListItemHandler.bind(this)}
                             removeListItemHandler={this.removeListItemHandler.bind(this)}/>
                <InputFieldComponent buttonClickHandler={this.buttonClickHandler.bind(this)}/>
                <CityList cityList={this.state.cities} itemListClickHandler={this.clickOnListItemHandler.bind(this)}/>
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

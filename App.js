import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import InputFieldComponent from './src/Components/InputFieldComponent'
import CityList from './src/Components/CityList'
import DetailsPage from './src/Components/DetailsPage'

import {addCity, deselectCity, removeCity, selectCity} from './src/store/actions/index'
import {connect} from 'react-redux'

class App extends Component {
    constructor() {
        super()
    }

    buttonClickHandler(value) {
        this.props.onAddCity(value)
    }

    removeListItemHandler() {
        this.props.onRemoveCity()
    }

    clickOnListItemHandler(key) {
        this.props.onSelectCity(key)
    }

    closeListItemHandler() {
        this.props.onDeselectCity()
    }

    render() {
        return (
            <View style={styles.container}>
                <DetailsPage selected={this.props.selected}
                             closeListItemHandler={this.closeListItemHandler.bind(this)}
                             removeListItemHandler={this.removeListItemHandler.bind(this)}/>
                <InputFieldComponent buttonClickHandler={this.buttonClickHandler.bind(this)}/>
                <CityList cityList={this.props.cities} itemListClickHandler={this.clickOnListItemHandler.bind(this)}/>
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

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities,
        selected: state.citiesReducer.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCity: name => dispatch(addCity(name)),
        onRemoveCity: () => dispatch(removeCity()),
        onSelectCity: key => dispatch(selectCity(key)),
        onDeselectCity: () => dispatch(deselectCity())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)

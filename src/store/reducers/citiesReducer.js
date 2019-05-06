
import {ADD_CITY, SELECT_CITY, DESELECT_CITY, REMOVE_CITY} from "../actions/actionTypes";

const initialState = {
    cities: [],
    selected: null
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: state.cities.concat({
                    value: action.value,
                    key: '' + Math.random(),
                    image: {
                        uri: 'https://images.spot.im/v1/production/am8uunwlgu48aqmiualn'
                    }
                })
            }
        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => {
                    return city.key !== state.selected.key
                }),
                selected: null
            }
        case SELECT_CITY:
            return {
                ...state,
                selected: state.cities.find(city => city.key === action.key)
            }
        case DESELECT_CITY:
            return {
                ...state,
                selected: null
            }
        default:
            return state
    }


}

export default citiesReducer

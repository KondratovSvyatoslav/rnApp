import {ADD_CITY, DESELECT_CITY, REMOVE_CITY, SELECT_CITY, VIEW_CITY} from "./actionTypes";

export const addCity = (cityName) => {
    return {
        type: ADD_CITY,
        value: cityName
    }
}

export const removeCity = () => {
    return {
        type: REMOVE_CITY
    }
}

export const deselectCity = () => {
    return {
        type: DESELECT_CITY
    }
}

export const selectCity = key => {
    return {
        type: SELECT_CITY,
        key: key
    }
}

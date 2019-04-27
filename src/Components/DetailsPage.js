import React from 'react'
import {View, Text, Modal, Image, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 50
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

const detailsPage = props => {
    let content = null
    if (props.selected) {
        content = (
            <View>
                <Image source={props.selected.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selected.value}</Text>
            </View>
        );
    }
    return (
        <Modal animationType='slide' visible={props.selected !== null} onRequestClose={props.closeListItemHandler}>
            <View style={styles.modalContainer}>
                {content}
                <Button title={'Delete'} color={'red'} onPress={props.removeListItemHandler}/>
                <Button title={'Close'} onPress={props.closeListItemHandler}/>
            </View>
        </Modal>
    )
}

export default detailsPage

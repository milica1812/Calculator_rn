import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({ buttonName, setButtonNameInput }) => {
    const handleNum = () => {
        console.log('--------------test', buttonName);
        setButtonNameInput(buttonName);
    };

    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={handleNum}>
                <Text style={styles.btnName}>{buttonName}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const styles = StyleSheet.create({
    btnName: {
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        padding: 15,
        marginRight: 2,
        marginBottom: 1,
        marginTop: 1
    }
});
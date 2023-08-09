import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({ buttonName, onPressBtn, setButtonNameInput }) => {
   const [previousNum,setPreviousNum] = useState('0');

    const handleNum = () => {
        if (buttonName === "CE") {
            setButtonNameInput("0");
            setPreviousNum("0");
        } else {
            const newButtonName = previousNum + buttonName; // Pretpostavka: previousNum je definisan u vašoj komponenti
            setButtonNameInput(newButtonName);
            setPreviousNum(newButtonName);
        }
        console.log('--------------test1', previousNum);
        console.log('--------------test2', buttonName);
        onPressBtn(buttonName);
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
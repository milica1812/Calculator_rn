import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function InputValue({ inputValue }) {
    return (
        <View style={styles.inputNum}>
            <Text style={styles.inputNumValue}>{inputValue}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    inputNum: {
        backgroundColor: 'orange',
        height: 100,
        width: '100%',
        marginBottom: 2,
    }, 
    inputNumValue: {
        color: 'black'
    }
});

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import InputValue from './components/InputValue';

export default function App() {
  const [buttonName, setButtonName] = useState('');

  return (
    <View style={styles.container}>
      <InputValue inputValue={buttonName} />
      <Button buttonName={"CE"} onPressBtn={setButtonName}/>
      <Button buttonName={"0"} onPressBtn={setButtonName} />
      <Button buttonName={"%"} onPressBtn={setButtonName} />
      <Button buttonName={"/"} onPressBtn={setButtonName} />
      <Button buttonName={"7"} onPressBtn={setButtonName} />
      <Button buttonName={"8"} onPressBtn={setButtonName} />
      <Button buttonName={"9"} onPressBtn={setButtonName} />
      <Button buttonName={"*"} onPressBtn={setButtonName} />
      <Button buttonName={"4"} onPressBtn={setButtonName} />
      <Button buttonName={"5"} onPressBtn={setButtonName} />
      <Button buttonName={"6"} onPressBtn={setButtonName} />
      <Button buttonName={"-"} onPressBtn={setButtonName} />
      <Button buttonName={"1"} onPressBtn={setButtonName} />
      <Button buttonName={"2"} onPressBtn={setButtonName} />
      <Button buttonName={"3"} onPressBtn={setButtonName} />
      <Button buttonName={"+"} onPressBtn={setButtonName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexDirection: "row",
    flexWrap: "wrap",
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
});

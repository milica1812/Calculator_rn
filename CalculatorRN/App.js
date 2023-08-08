import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import InputValue from './components/InputValue';

export default function App() {
  const [buttonName, setButtonName] = useState(""); 

  // const handleNum = (value) => {
  //   setButtonName(value);
  // };

  return (
    <View style={styles.container}>
      <InputValue inputValue={buttonName}/>
      <Button buttonName={"CE"} />
      <Button buttonName={"0"} setButtonNameInput={setButtonName} />
      <Button buttonName={"%"} />
      <Button buttonName={"/"} />
      <Button buttonName={"7"} />
      <Button buttonName={"8"} />
      <Button buttonName={"9"} />
      <Button buttonName={"*"} />
      <Button buttonName={"4"} />
      <Button buttonName={"5"} />
      <Button buttonName={"6"} />
      <Button buttonName={"-"} />
      <Button buttonName={"1"} />
      <Button buttonName={"2"} />
      <Button buttonName={"3"} />
      <Button buttonName={"+"} />
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

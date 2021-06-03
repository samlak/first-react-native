import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ addHandler }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (goalText) => {
    setGoal(goalText);
  }

  const addNewHandler = () => {
    addHandler(goal);
    return setGoal('');
  }



  return (
    <Modal visible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What is your goal?"
          style={ styles.input }
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title="ADD" onPress={addNewHandler} />
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  input: { 
    width: '80%', 
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    padding: 10 
  }
});

export default GoalInput;
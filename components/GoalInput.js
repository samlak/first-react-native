import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ addHandler, isModalOpen, closeModal }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (goalText) => {
    setGoal(goalText);
  }

  const addNewHandler = () => {
    addHandler(goal);
    return setGoal('');
  }

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What is your course goal?"
          style={ styles.input }
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={closeModal} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addNewHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  input: { 
    width: '80%', 
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    padding: 10,
    marginBottom: 30 
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
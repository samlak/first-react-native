import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native';

const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete} >
      <View style={styles.goalList}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  goalList: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});

export default GoalItem;
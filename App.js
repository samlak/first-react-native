import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsCollection, setGoalsCollection] = useState([]);

  const addHandler = (goal) => {
    setGoalsCollection(currentCollections => [...currentCollections, { key: Math.random().toString(), value: goal }  ]);
  }

  const removeHandler = (key) => {
    setGoalsCollection(currentCollections => {
      const newCollection = currentCollections.filter(collections => {
        return collections.key !== key;
      })
      return newCollection;
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput addHandler={addHandler}/>
      
      <FlatList 
        data={goalsCollection}
        renderItem={itemData => (
          <GoalItem 
            onDelete={removeHandler.bind(this, itemData.item.key)} 
            item={itemData.item.value} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }  
});

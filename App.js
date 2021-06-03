import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsCollection, setGoalsCollection] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addHandler = (goal) => {
    if (!goal) return;
    setIsModalOpen(false);
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
      <Button title="New Goal" onPress={setIsModalOpen.bind(this, true)} />
      <GoalInput 
        addHandler={addHandler} 
        isModalOpen={isModalOpen}
        closeModal={setIsModalOpen.bind(this, false)}
      />
    
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

import { useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => {
      return [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]
    });
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={itemData => <GoalItem onDeleteItem={deleteGoalHandler} itemText={itemData.item.text} />} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }
});

import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

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
    <>
      <StatusBar style='inverted'/>
      <View style={styles.appContainer}>
        <Button title="Add new goal" onPress={startAddGoalHandler} color='#e065ec' />
        <GoalInput
          visible={modalIsVisible}
          modalVisibilityHandler={endAddGoalHandler}
          addGoalHandler={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={itemData => <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id} itemText={itemData.item.text} />} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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

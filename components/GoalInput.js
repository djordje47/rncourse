import { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function GoalInput({ addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const onAddGoalPressed = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your Course Goal..'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        style={styles.textInput} />
      <Button
        title='Add Goal'
        onPress={onAddGoalPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
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
})
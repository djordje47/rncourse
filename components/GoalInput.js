import { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native';

export default function GoalInput({ addGoalHandler, visible, modalVisibilityHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const onAddGoalPressed = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
    modalVisibilityHandler(false);
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder='Your Course Goal..'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={() => modalVisibilityHandler(false)} />
          </View>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              color='#b180f0'
              onPress={onAddGoalPressed} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 12,
    width: '100%',
  }
})
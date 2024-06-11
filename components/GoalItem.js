import { StyleSheet, View, Text, Pressable } from 'react-native';
export default function GoalItem({ itemText, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteItem(id)}>
        <Text style={styles.goalItemText}>{itemText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalItemText: {
    padding: 8,
    color: 'white'
  }
});
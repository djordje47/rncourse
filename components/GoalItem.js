import { StyleSheet, View, Text, Pressable } from 'react-native';
export default function GoalItem({ itemText, onDeleteItem }) {
  return (
    <Pressable onPress={() => onDeleteItem()}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{itemText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalItemText: {
    color: 'white'
  }
});
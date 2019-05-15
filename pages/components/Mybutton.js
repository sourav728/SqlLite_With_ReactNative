/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#A1887F',
    color: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#ffffff',
  },
});
export default Mybutton;
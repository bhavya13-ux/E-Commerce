import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = ({ title,onPress}) => {
  return (
<TouchableOpacity style={styles.Button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
</TouchableOpacity>
  )
}
export default Button

const styles = StyleSheet.create({
    Button: {
    backgroundColor: '#0066cc',
    width:'45%',
    height:'90%',
    alignItems: 'center',
    marginBottom:18,
    paddingTop:8
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign:'center',
  },

})
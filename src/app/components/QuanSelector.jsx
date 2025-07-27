import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const QuanSelector = ({initialQuantity=1,onChange}) => {
    const [quan,setQuan]=useState(initialQuantity);

    const increase=()=>{
        const newQty=quan+1;
        setQuan(newQty);
        onChange && onChange(newQty);
    };
    const decrease=()=>{
        if(quan>1){
        const newQty=quan-1;
        setQuan(newQty);
        onChange && onChange(newQty);
        }
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={decrease} style={styles.button}>
            <Text style={styles.symbol}>-</Text>
        </TouchableOpacity>
      <Text style={styles.quantity}>{quan}</Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
            <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default QuanSelector

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 5,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
})
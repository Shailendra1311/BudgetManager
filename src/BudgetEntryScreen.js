import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addItem } from './reducers/budgetReducer';

const BudgetEntryScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const dispatch = useDispatch();

  const saveItem = () => {
    dispatch(addItem({ itemName, plannedAmount, actualAmount }));
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View>
      <TextInput
        label="Name of the item"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        label="Planned amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        keyboardType="numeric"
      />
      <TextInput
        label="Actual amount"
        value={actualAmount}
        onChangeText={setActualAmount}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={saveItem} />
      <Button title="Show items" onPress={() => navigation.navigate('BudgetEntryListing')} />
    </View>
  );
};

export default BudgetEntryScreen;

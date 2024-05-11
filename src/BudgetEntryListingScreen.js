import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const BudgetEntryListingScreen = () => {
  const budgetEntries = useSelector((state) => state.budget.budgetEntries);

  return (
    <View>
      <Text>Budget entry listing</Text>
      {budgetEntries.map((entry, index) => (
        <View key={index}>
          <Text>Name: {entry.itemName}</Text>
          <Text>Planned Amount: {entry.plannedAmount}</Text>
          <Text>Actual Amount: {entry.actualAmount}</Text>
        </View>
      ))}
    </View>
  );
};

export default BudgetEntryListingScreen;

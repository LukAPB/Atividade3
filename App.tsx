import React, { useState } from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

interface Item {
  id: string;
  name: string;
  isEnabled: boolean;
}

const initialData: Item[] = [
  { id: '1', name: 'Item 1', isEnabled: false },
  { id: '2', name: 'Item 2', isEnabled: true },
  { id: '3', name: 'Item 3', isEnabled: false },
  { id: '4', name: 'Item 4', isEnabled: true },
  { id: '5', name: 'Item 5', isEnabled: false },
];

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>(initialData);

  const toggleSwitch = (id: string) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
      )
    );
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Switch
        value={item.isEnabled}
        onValueChange={() => toggleSwitch(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default App;

// Complete App.tsx for a standard Expo React Native TypeScript project or Snack.
// Original practice solution. Rebuild from the requirements before reading it.
import { useState } from 'react';
import {
  Button, Pressable, ScrollView, StyleSheet,
  Switch, Text, TextInput, View,
} from 'react-native';

type MenuDraft = { name: string; popular: boolean };
export type MenuItem = MenuDraft & { id: string };
const initialMenu: MenuItem[] = [
  { id: '1', name: 'Rice bowl', popular: true },
  { id: '2', name: 'Fruit cup', popular: false },
];

type ComposerProps = { onAdd: (draft: MenuDraft) => void };
function Composer({ onAdd }: ComposerProps) {
  const [name, setName] = useState('');
  const [popular, setPopular] = useState(false);
  const cleanName = name.trim();
  function submit() {
    if (cleanName.length === 0) return;
    onAdd({ name: cleanName, popular });
    setName('');
    setPopular(false);
  }
  return (
    <View style={styles.composer}>
      <TextInput
        accessibilityLabel="New menu item name"
        placeholder="New menu item"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <View style={styles.row}>
        <Text>Popular</Text>
        <Switch
          accessibilityLabel="Mark new item popular"
          value={popular}
          onValueChange={setPopular}
        />
      </View>
      <Button title="Add item" disabled={!cleanName} onPress={submit} />
    </View>
  );
}

type CardProps = {
  item: MenuItem;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};
function ItemCard({ item, onToggle, onRemove }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.popular ? 'Popular choice' : 'Regular choice'}</Text>
      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Toggle popularity of ${item.name}`}
          onPress={() => onToggle(item.id)}
          style={styles.action}
        >
          <Text>Toggle popular</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Remove ${item.name}`}
          onPress={() => onRemove(item.id)}
          style={styles.action}
        >
          <Text>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  const [menu, setMenu] = useState(initialMenu);
  const [nextId, setNextId] = useState(3);
  function addMenuItem(draft: MenuDraft) {
    const item: MenuItem = { ...draft, id: String(nextId) };
    setNextId(previous => previous + 1);
    setMenu(previous => [...previous, item]);
  }
  function togglePopular(id: string) {
    setMenu(previous => previous.map(item =>
      item.id === id ? { ...item, popular: !item.popular } : item
    ));
  }
  function removeItem(id: string) {
    setMenu(previous => previous.filter(item => item.id !== id));
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Campus menu</Text>
      <Text>{menu.length} items</Text>
      <Composer onAdd={addMenuItem} />
      <ScrollView contentContainerStyle={styles.list}>
        {menu.length === 0 ? (
          <Text>No items yet. Add your first one.</Text>
        ) : null}
        {menu.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onToggle={togglePopular}
            onRemove={removeItem}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, paddingTop: 48, paddingHorizontal: 20,
    paddingBottom: 20, backgroundColor: '#F6F8FF',
  },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 6 },
  composer: { paddingVertical: 16 },
  input: {
    borderWidth: 1, borderColor: '#556080', borderRadius: 8,
    padding: 12, backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', marginVertical: 8,
  },
  list: { paddingBottom: 24 },
  card: {
    padding: 16, marginBottom: 12, borderRadius: 12,
    backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CBD5E1',
  },
  itemName: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  action: {
    minHeight: 44, justifyContent: 'center', paddingHorizontal: 12,
    marginRight: 8, marginBottom: 4, borderRadius: 8,
    backgroundColor: '#DDE8FF',
  },
});
